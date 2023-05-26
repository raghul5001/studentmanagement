const express = require('express')
const router = express.Router()

const {createStaff,
    getAllStaff,
    updateStaffById,
    deleteStaffById,
    staffCsv
} = require("../../controllers/staff")
const {validateStaff} =require("../../validator/staffvalid")

router.post('/create',validateStaff,createStaff)
router.get('/getall',getAllStaff)
router.put('/updatestudent',validateStaff,updateStaffById)
router.delete('/deletestudent',deleteStaffById)
router.get('/staffcsv',staffCsv)



module.exports = router;