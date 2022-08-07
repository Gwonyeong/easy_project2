const express = require("express")
const signRouter = require("./signRouter")
const router = express.Router();

router.use('/sign', signRouter);

module.exports = router