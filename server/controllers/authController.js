const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userLogoutController = async (req, res) => {
    if (req.body.username) {
        try {
            updatedUser = await Admin.updateOne({ username: req.body.username }, { logged_in: false });
            res.status(200).json({
                success: true,
                status: 200,
                message: "successfully logged out",
            });
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    }
    else {
        res.status(400).send('username is required');
    }

}

const userRegisterController = async (req, res) => {
    const adminExists = await Admin.findOne({ username: req.body.username });
    if (adminExists) {
        return res.status(400).send('username already registered');
    }
    try {
        if (req.body.password && req.body.password !== '') {
            const hashedPassword = await bcrypt.hash(
                req.body.password,
                await bcrypt.genSalt(10)
            );
            const admin = new Admin({
                username: req.body.username,
                password: hashedPassword
            });

            const savedAdmin = await admin.save();

            const authToken = jwt.sign(
                { username: savedAdmin.username },
                process.env.JWT_SECRET,
                {}
            );

            res.status(200).json({
                message: "user registered successfully",
                token: authToken
            });
        } else {
            res.status(400).send('password is required');
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const userLoginController = async (req, res) => {
    if (req.body.username === '') {
        return res.status(400).send('username is required');
    }
    if (req.body.password === '') {
        return res.status(400).send('password is required');
    }
    try {
        const admin = await Admin.findOne({ username: req.body.username });
        if (!admin) {
            return res.status(400).send('username is not registered');
        }

        if (req.body.password && req.body.username) {
            const validPass = await bcrypt.compare(
                req.body.password,
                admin.password
            );
            if (!validPass) {
                return res.status(400).send('Wrong password');
            }
            const authToken = jwt.sign(
                { username: admin.username },
                process.env.JWT_SECRET,
                {}
            );
            updatedAdmin = await admin.updateOne({ username: req.body.username }, { logged_in: true });
            res.json({
                success: true,
                status: 200,
                message: "Login successfull.",
                token: authToken,
            });
        } else {
            if (!req.body.password) {
                res.status(400).send('password is required');
            } else {
                res.status(400).send('username is required');
            }
        }
    } catch (err) {
        return res.status(400).send(err.message);
    }
}

module.exports = { userLoginController, userLogoutController, userRegisterController }