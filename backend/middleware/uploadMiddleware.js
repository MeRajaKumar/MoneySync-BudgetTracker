const multer = require('multer');

//Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

//File Filter

const fileFilter = ( req, file, cb) => {
    const allowedTypes = ['image/jpg','image/png','image/jpeg'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true);
    }
    else{
        cb(new Error('only .jpeg, .png, and .jpg format allowed'), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;