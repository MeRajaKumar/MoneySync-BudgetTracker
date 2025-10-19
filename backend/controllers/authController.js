const User = require('../models/User');
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
//Regiter User
exports.registerUser = async (req,res) => {};
//Login User
exports.loginUser = async (req,res) => {};
//Register User

exports.getUserInfo= async (req,res) => {};