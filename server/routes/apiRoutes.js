const express = require('express')
const bodyParser = require('body-parser')

const { userLogoutController, userLoginController, userRegisterController } = require('../controllers/authController')
const { getUserController, markUserPositiveController, markUserRecoveredController, addToQuarantineController } = require('../controllers/userController')

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

router.get("/logout", userLogoutController);
router.post("/login", userLoginController);
router.post("/register", userRegisterController);

router.get("/user", getUserController);
router.post("/user/mark-positive", markUserPositiveController)
router.post("/user/mark-recovered", markUserRecoveredController)
router.post("/user/mark-quarantine", addToQuarantineController)

module.exports = router;
