const express = require('express');
const router = express.Router();
const { userSingUp, userLogin, getUser } = require('../controller/user');

router.post("/singUp",userSingUp)
router.post("/login",userLogin)
router.get("/user/:id",getUser)

module.exports = router;

