const User = require('../models/user');


const getUserController = async (req, res) => {
    try {
        const users = await User.find();
        if (users) {
            res.status(200).json({
                message: "employee list",
                employees: users
            });
        }
        else {
            res.status(200).json({
                message: "no employees found",
                employees: users
            });
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const markUserPositiveController = async (req, res) => {
    if (req.body.id) {
        try {
            console.log(req.body.id)
            const user = await User.update({ EmpId: req.body.id }, { Covid: "true" });
            const users = await User.find()
            if (user) {
                res.status(200).json({
                    message: "user updated",
                    employees: users
                });
            }
            else {
                res.status(200).json({
                    message: "selected employee found",
                    employees: users
                });
            }
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
    else {
        res.status(400).json({ message: "employee id required" });
    }
};

const markUserRecoveredController = async (req, res) => {
    if (req.body.id) {
        try {
            console.log(req.body.id)
            const user = await User.update({ EmpId: req.body.id }, { Covid: false, Quarantined: false });
            const users = await User.find()
            if (user) {
                res.status(200).json({
                    message: "user updated",
                    employees: users
                });
            }
            else {
                res.status(200).json({
                    message: "selected employee found",
                    employees: users
                });
            }
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
    else {
        res.status(400).json({ message: "employee id required" });
    }
};

module.exports = { getUserController, markUserPositiveController, markUserRecoveredController }
