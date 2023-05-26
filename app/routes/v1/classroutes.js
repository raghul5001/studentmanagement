const express = require('express');
const router= express.Router();

const {createClass,mapSectionToClass,mapStudentToClassSection} = require('../../controllers/class')


router.post('/createclass', createClass);
router.post('/mapsection', mapSectionToClass);
router.post('/mapstudent', mapStudentToClassSection);


module.exports = router;
