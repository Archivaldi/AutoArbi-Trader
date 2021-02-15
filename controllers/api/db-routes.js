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
                req.session.user_id = user_id;
                req.session.role = role;
                res.send({ user_id });
            }
        }
    );
});

router.post("/login", (req, res) => {
    const { passwordInput, emailInput } = req.body;

    connection.query("SELECT * FROM Users WHERE email=?", [emailInput], (err, result) => {
        if (err) throw err;
        else if (result.length === 0) {
            res.send({ error: "Invalid email. Please try again." });
        } else {
            let { p_hash, user_id, role } = result[0];
            bcrypt.compare(passwordInput, p_hash, (err, match) => {
                if (match) {
                    req.session.user_id = user_id;
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

router.get("/check-user", (req, res) => {
    const { user_id, role } = req.session;

    if (role === "seller") {
        connection.query("SELECT * FROM Users LEFT JOIN Cars USING (car_id) WHERE user_id = ?", [user_id], (err, result) => {
            if (err) throw err;
            else {
                res.send(result);
            };
        });
    } else {
        connection.query("SELECT * FROM Users WHERE user_id = ?", [user_id], (err, result) => {
            if (err) throw err;
            else {
                res.send(result);
            }
        });
    };
});

router.post("/add-info", (req, res) => {
    const { role, user_id } = req.session;
    const { firstName, lastName, street, city, state, zip_code } = req.body;

    if (role === "buyer") {
        const { transaction_id } = req.body;
        connection.query("Update Users SET firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip_code = ?, transaction_id = ? WHERE user_id = ?",
            [firstName, lastName, street, city, state, zip_code, transaction_id, user_id],
            (err, result) => {
                if (err) throw err;
                else {
                    res.send({ message: "All info is aplied" });
                }
            });
    } else {
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
                        res.send({ message: "All info is aplied" });
                    };
                });
        };
    };
});

router.get("/logout", (req, res) => {
    req.session = null;
})

module.exports = router;