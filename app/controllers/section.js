const db = require("../models");
const Section = db.section;

const createSection = async (req, res) => {
    try {
      const { name} = req.body;
      const section = await Section.create({
        name
      });
      res.status(201).json(section);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create section' });
    }
  };
  module.exports = {createSection}