const express = require('express');
const router= express.Router();

const {createStudent,getAllStudents,updateStudentById,deleteStudentById,studentCsv} = require('../../controllers/student')

const { validateStudent } = require("../../validator/studentvalid");

router.post('/createStudent',validateStudent, createStudent);
router.get('/getall', getAllStudents);
router.put('/updatestudent/:id', validateStudent, updateStudentById);
router.delete('/deletestudent/:id', deleteStudentById);
router.get('/csv',studentCsv)

module.exports = router;
