const express = require("express");
const router = express.Router();
const user = require('./useroutes');
const students = require('./studentroutes');
const staff = require('./staffroutes');
const classes = require('./classroutes')
const section = require('./sectionroutes')

router.use('/user', user);
router.use('/student',students);
router.use('/staff',staff);
router.use('/class',classes);
router.use('/section',section);

module.exports = router;