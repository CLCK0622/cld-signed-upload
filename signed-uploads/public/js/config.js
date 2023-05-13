const cloudinary = require('cloudinary').v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
    cloud_name: "dat4mqsnf",
    api_key: "699686925639313",
    api_secret: "7H747SmwNDMPbqxPXR0pLjtqa9I",
    upload_preset: "upload2022",
    secure: true
});

exports.myconfig = myconfig;

