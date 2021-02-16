const router = require("express").Router();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require("uuid");
const randomstring = require('randomstring');
const connection = require('../../config/db');

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
            const { firstName, lastName, middleName, street, city, state, zip_code, county, transaction_id, price, year, odometer, make, model, body, vin, plate, title_number } = result[0]
            if (err) throw err;
            else if (!firstName || !lastName || !middleName || !street || !city || !state || !zip_code || !county || !transaction_id || !price || !year || !odometer || !make || !model || !body || !vin || !plate || title_number) {
                res.send({
                    firstName, lastName, middleName, street, city, state, zip_code, county, transaction_id, price, year, odometer, make, model, body, vin, plate, title_number
                });
            } else {
                takeSecondPerson(result[0].transaction_id);
            };
        });
    } else if (role === "buyer") {
        connection.query("SELECT * FROM Users WHERE user_id = ?", [user_id], (err, result) => {
            const { firstName, lastName, middleName, street, city, state, zip_code, county, transaction_id } = result[0]
            if (err) throw err;
            else if (!firstName || !lastName || !middleName || !street || !city || !state || !zip_code || !county || !transaction_id) {
                res.send({
                    firstName, lastName, middleName, street, city, state, zip_code, county, transaction_id
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
    const { firstName, lastName, street, city, state, zip_code } = req.body;

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
            connection.query("Update Users SET firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip_code = ?, transaction_id = ? WHERE user_id = ?",
                [firstName, lastName, street, city, state, zip_code, transaction_id, user_id],
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
        const transaction_id = randomstring.generate(10);
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
            connection.query("Update Users SET firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip_code = ?, transaction_id = ?, car_id = ? WHERE user_id = ?",
                [firstName, lastName, street, city, state, zip_code, transaction_id, car_id, user_id],
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

router.get("/updateUrls", async (req, res) => {
    const { bill_of_sale_url, title_url } = req.body;
    const { user_id } = req.session;
    connection.query("UPDATE Users SET billOfSale = ?, title = ? WHERE user_id = ?",
        [bill_of_sale_url, title_url, user_id],
        (err, result) => {
            if (err) throw err;
            else {
                console.log("Info inserted");
                res.send({ message: "Succses" });
            };
        });
});


router.post("/session", (req, res) => {
    res.send(req.session);
});

router.post("/logout", (req, res) => {
    req.session = null;
    res.send(req.session);
});

module.exports = router;