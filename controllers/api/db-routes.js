const router = require("express").Router();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require("uuid");
const randomstring = require('randomstring');
const connection = require('../../config/db');
const cloudinary = require('cloudinary').v2;
const keys = require('../../config/keys');
const path = require('path');
cloudinary.config({ cloud_name: keys.cloudinary.cloud_name, api_key: keys.cloudinary.apikey, api_secret: keys.cloudinary.secret });

router.post("/signup/:role", async (req, res) => {
    const { role } = req.params;
    const { passwordInput, emailInput } = req.body;

    const user_id = uuidv4();
    const p_hash = await bcrypt.hash(passwordInput, 10);

    connection.query("INSERT INTO Users(email, p_hash, user_id, role) VALUES (?,?,?,?)",
        [emailInput, p_hash, user_id, role],
        (err, result) => {
            if (err) throw err;
            else {
                req.session.role = role;
                res.send({ user_id, role });
            }
        }
    );
});


router.post("/login", (req, res) => {
    //server gets the email and the password
    const { emailInput, passwordInput } = req.body;

    connection.query("SELECT * FROM Users WHERE email=?", [emailInput], (err, result) => {
        if (err) throw err;
        else if (result.length === 0) {
            res.send({ error: "Invalid email. Please try again." });
        } else {
            let { p_hash, user_id, role } = result[0];

            bcrypt.compare(passwordInput, p_hash, (err, match) => {
                if (match) {
                    req.session.role = role;
                    res.send({ user_id, role });
                } else {
                    res.send({ error: "Invalid Password. Please try again." })
                }
            })
        }
    });
});

router.post("/session", (req, res) => {
    res.send(req.session);
});

router.post("/check-user", (req, res) => {
    const { user_id, role } = req.session;

    if (role === "seller") {
        connection.query("SELECT * FROM Users LEFT JOIN Cars USING (car_id) WHERE user_id = ?", [user_id], (err, result) => {
            const { firstName, lastName, street, city, state, zip_code, county, transaction_id, price, year, odometer, make, model, body, vin, plate, title_number } = result[0];
            if (err) throw err;
            else if (!firstName || !lastName || !street || !city || !state || !zip_code || !county || !transaction_id || !price || !year || !odometer || !make || !model || !body || !vin || !plate || title_number) {
                res.send({
                    firstName, lastName, street, city, state, zip_code, county, transaction_id, price, year, odometer, make, model, body, vin, plate, title_number
                });
            } else {
                takeSecondPerson(result[0].transaction_id);
            };
        });
    } else if (role === "buyer") {
        connection.query("SELECT * FROM Users WHERE user_id = ?", [user_id], (err, result) => {
            const { firstName, lastName, street, city, state, zip_code, county, transaction_id } = result[0];
            if (err) throw err;
            else if (!firstName || !lastName || !street || !city || !state || !zip_code || !county || !transaction_id) {
                res.send({
                    message: "Some info missing"
                });

            }
            else {
                takeSecondPerson(result[0].transaction_id);
            }
        });
    };

    const takeSecondPerson = (id) => {
        connection.query("SELECT * FROM Users WHERE transaction_id = ? ORDER BY role DESC", [id], (err, result) => {
            if (err) throw err;
            else if (result.length === 1) {
                res.send({ seller: result[0] });
            } else {
                res.send({
                    seller: result[0],
                    buyer: result[1]
                });
            };
        });
    };
});

router.post("/add-info", (req, res) => {
    const { role, user_id } = req.session;
    const { firstName, lastName, street, city, state, zip_code, county } = req.body;

    if (role === "buyer") {
        const { transaction_id } = req.body;

        connection.query("SELECT * FROM Users WHERE transaction_id = ?", [transaction_id], (err, result) => {
            if (err) throw err;
            else if (result.length === 0) {
                res.send({ error: "Transaction ID is not recognized." });
            } else if (result.length === 1) {
                update_buyer();
            } else {
                res.send({ error: "This Transaction ID already hae buyer and seller" });

            }
        })

        const update_buyer = () => {
            connection.query("Update Users SET firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip_code = ?, transaction_id = ?, county = ? WHERE user_id = ?",
                [firstName, lastName, street, city, state, zip_code, transaction_id, county, user_id],
                (err, result) => {
                    if (err) throw err;
                    else {
                        find_seller();
                    }
                });
        }

        const find_seller = () => {
            //the client gets the response with two people. The first person is the seller
            connection.query("SELECT * FROM Users WHERE transaction_id = ? ORDER BY role DESC", [transaction_id], (err, result) => {
                if (err) throw err;
                else {

                    res.send({
                        seller: result[0],
                        buyer: result[1]
                    });
                };
            });
        };
    } else if (role === "seller") {
        const { price, year, odometer, make, model, body, vin, plate, title_number } = req.body;
        const transaction_id = randomstring.generate(6);
        connection.query("INSERT INTO Cars(price, year, odometer, make, model, body, vin, plate, title_number) VALUES (?,?,?,?,?,?,?,?,?)",
            [price, year, odometer, make, model, body, vin, plate, title_number],
            (err, result) => {
                if (err) throw err;
                else {
                    let car_id = result.insertId;
                    insert_seller(car_id);
                }
            })

        const insert_seller = (car_id) => {
            connection.query("Update Users SET firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip_code = ?, transaction_id = ?, car_id = ?, county = ? WHERE user_id = ?",
                [firstName, lastName, street, city, state, zip_code, transaction_id, car_id, county, user_id],
                (err, result) => {
                    if (err) throw err;
                    else {
                        find_seller();
                    };
                });
        };

        const find_seller = () => {
            connection.query("SELECT * FROM Users WHERE user_id = ?", [user_id], (err, result) => {
                if (err) throw err;
                else {
                    res.send(result);
                }
            })
        }
    };
});

router.post("/updateUrls", async (req, res) => {
    const { bill_of_sale_url, title_url, seller_id, buyer_id } = req.body;
    connection.query("UPDATE Users SET billOfSale = ?, title = ? WHERE user_id = ? OR user_id = ?",
        [bill_of_sale_url, title_url, seller_id, buyer_id],
        (err, result) => {
            if (err) throw err;
            else {
                console.log("Info inserted");
                res.send({ message: "Success" });
            };
        });
});

router.post("/documentUpload/:document", async (req, res) => {
    const { document } = req.params;
    const file = req.files.file;
    console.log(document);
    console.log(file);

    try {
        await file.mv(path.join(__dirname, `./../../Upload/${file.name}`));
        const { secure_url } = await cloudinary.uploader.upload(path.join(__dirname, `./../../Upload/${file.name}`));
        let query = "";

        if (document === "registration") {
            query = "UPDATE Users SET registration = ? WHERE user_id = ?"
        } else if (document === "government_id") {
            query = "UPDATE Users SET govId = ? WHERE user_id = ?"
        }

        connection.query(query, [secure_url, req.session.user_id], (err, result) => {
            if (err) throw err;
            else {
                res.send({ url: secure_url })
            }
        })
    } catch (e) {
        console.log(e)
    }
});

router.post("/documentUpload/:document", async (req, res) => {
    //the server will need to know if it's a registration or the gov_id. We set it into params
    const { document } = req.params;
    const file = req.files[document];

    try {
        await file.mv(path.join(__dirname, `./../../Upload/${file.name}`));
        const { secure_url } = await cloudinary.uploader.upload(path.join(__dirname, `./../../Upload/${file.name}`));
        let query = "";

        if (document === "registration") {
            query = "UPLOAD Users SET registration = ? WHERE user_id = ?"
        } else if (document === "govermentId") {
            query = "UPLOAD Users SET govId = ? WHERE user_id = ?"
        }

        connection.query(query, [secure_url, req.session.user_id], (err, result) => {
            if (err) throw err;
            else {
                res.send({ message: "File uploaded" })
            }
        })
    } catch (e) {
        console.log(e)
    }
});

router.post("/session", (req, res) => {
    res.send(req.session);
});

router.post("/logout", (req, res) => {
    req.session = null;
    res.send(req.session);
});

module.exports = router;