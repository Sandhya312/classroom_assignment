const knex = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const signup = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);


        await knex('users')
            .insert({
                name,
                email,
                password: hashedPassword
            })
            .then(result => {

                const token = jwt.sign({ user: email }, "123", { expiresIn: '3600s' });

                res.status(200).send({
                    "user": email,
                    "token": token,
                });

            })
            .catch((err) => {
                console.log(err);
                return res.status(404).json({ message: err.sqlMessage });
            })




    } catch (error) {
        res.status(500).send(error.message);
    }
}

const login = async (req, res) => {
    try {

        const { email } = req.body;

        await knex('users')
            .where({ email, })
            .then(() => {
                const token = jwt.sign({ user: email }, "123", { expiresIn: '3600s' });
                res.status(200).send({
                    "user": email,
                    "token": token,
                });

            })
            .catch((err) => {
                console.log(err);
                return res.status(404).json({ message: err.sqlMessage });
            })




    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { signup, login };