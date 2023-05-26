const db = require("../models");
const Staff = db.Staff;
const { csvFile } = require('../../app/helpers/exportCsvFile'); 
const fs = require('fs');

const staffCsv = async (req, res) => {
  try {
    
    const staffs = await Staff.findAll();
    const csvPath = 'staff.csv'; 
    await csvFile(csvPath, staffs);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=${csvPath}`);
    fs.createReadStream(csvPath).pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to download staff data as CSV' });
  }
};


const createStaff = async (req, res) => {
  try {
    const { name, dob, phoneNumber, designation, qualification, address, city, state, pincode } = req.body;
    const staff = await Staff.create({
      name,
      dob,
      phoneNumber,
      designation,
      qualification,
      address,
      city,
      state,
      pincode,
    });
    res.status(201).json(staff);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create staff member' });
  }
};

const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.findAll();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve staff members' });
  }
};

const updateStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dob, phoneNumber, designation, qualification, address, city, state, pincode } = req.body;
    const [updatedRows] = await Staff.update(
      {
        name,
        dob,
        phoneNumber,
        designation,
        qualification,
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
      res.status(404).json({ error: 'Staff member not found' });
    } else {
      res.json({ message: 'Staff member updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update staff member' });
  }
};

const deleteStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await Staff.destroy({
      where: { id },
    });
    if (deletedRows === 0) {
      res.status(404).json({ error: 'Staff member not found' });
    } else {
      res.json({ message: 'Staff member deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete staff member' });
  }
};

module.exports = {
  createStaff,
  getAllStaff,
  updateStaffById,
  deleteStaffById,
  staffCsv
};
