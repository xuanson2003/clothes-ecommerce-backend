const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: './src/upload/images',
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

module.exports = upload;
