const db = require("../models");
const Student = db.Student;
const { csvFile } = require('../../app/helpers/exportCsvFile'); 
const fs = require('fs');

const studentCsv = async (req, res) => {
  try {
    
    const students = await Student.findAll();
    const csvPath = 'students.csv'; 
    await csvFile(csvPath, students);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=${csvPath}`);
    fs.createReadStream(csvPath).pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to download student data as CSV' });
  }
};

const createStudent = async (req, res) => {
    try {
      const { name, dob, phoneNumber, parentName, parentPhone, address, city, state, pincode } = req.body;
      const student = await Student.create({
        name,
        dob,
        phoneNumber,
        parentName,
        parentPhone,
        address,
        city,
        state,
        pincode,
      });
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create student' });
    }
  };
  
  const getAllStudents = async (req, res) => {
    try {
      const students = await Student.findAll();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve students' });
    }
  };
  const updateStudentById = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, dob, phoneNumber, parentName, parentPhone, address, city, state, pincode } = req.body;
      const [updatedRows] = await Student.update(
        {
          name,
          dob,
          phoneNumber,
          parentName,
          parentPhone,
          address,
          city,
          state,
          pincode,
        },
        {
          where: { id },
        }
      );
      if (updatedRows === 0) {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.json({ message: 'Student updated successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update student' });
    }
  };
  
  const deleteStudentById = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedRows = await Student.destroy({
        where: { id },
      });
      if (deletedRows === 0) {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.json({ message: 'Student deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete student' });
    }
  };
  
  module.exports = {
    createStudent,
    getAllStudents,
    updateStudentById,
    deleteStudentById,
    studentCsv
  };