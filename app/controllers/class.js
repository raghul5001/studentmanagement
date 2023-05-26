const db = require("../models");
const Class = db.classes;
const Section = db.section
const Student = db.Student

const createClass = async (req, res) => {
    try {
      const { name} = req.body;
      const classes = await Class.create({
        name
      });
      res.status(201).json(classes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create class' });
    }
  };


  const mapSectionToClass = async (req,res) => {
    try {
      const { classId, sectionId } = req.body;
  
      const targetClass = await Class.findByPk(classId);
      const targetSection = await Section.findByPk(sectionId);
  
      if (!targetClass || !targetSection) {
        return res.status(404).json({
          success: false,
          message: 'Class or section not found',
        });
      }
      targetClass.SectionId = targetSection.id; // Assuming you have a foreign key column named "SectionId" in your Class model
  
      await targetClass.save();
  
      return res.status(200).json({
        success: true,
        message: 'Section mapped to class successfully',
        data: {
          classId: targetClass.id,
          sectionId: targetSection.id,
        },
      });
    } catch (error) {
      console.error('Error mapping section to class:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };
  
  const mapStudentToClassSection = async (req,res)=>{
    try {
      const { studentId, classId, sectionId } = req.body;
      const targetStudent = await Student.findByPk(studentId);
      const targetClass = await Class.findByPk(classId);
      const targetSection = await Section.findByPk(sectionId);
  
      if (!targetStudent||!targetClass||!targetSection) {
        return res.status(404).json({
          success: false,
          message: 'Student, class, or section not found',
        });
      }
      targetStudent.ClassId = targetClass.id; 
      targetStudent.SectionId = targetSection.id; 
  
      await targetStudent.save();
  
      return res.status(200).json({
        success: true,
        message: 'Student mapped to class and section successfully',
        data: {
          studentId: targetStudent.id,
          classId: targetClass.id,
          sectionId: targetSection.id,
        },
      });
    } catch (error) {
      console.error('Error mapping student to class and section:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }   
  }
  module.exports = {createClass,mapSectionToClass,mapStudentToClassSection}