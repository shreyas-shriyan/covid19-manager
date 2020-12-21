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

module.exports = { getUserController }
