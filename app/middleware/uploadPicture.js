const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/profile_pics/')
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        console.log(file.mimetype)
        if (
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "text/csv"
        ) {
            callback(null, true)
        } else {
            console.log("file format is not supported!")
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1990 * 1180 * 2
    }
})

module.exports = upload