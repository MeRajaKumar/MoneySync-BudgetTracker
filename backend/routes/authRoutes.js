const express = require ("express");
import { protect } from "../middleware/authMiddleware.js";
import { registerUser, loginUser, getUserInfo } from "../controllers/authController";

const {
    registerUser, 
    loginUser, 
    getUserInfo,
}= require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/getUser", protect , getUserInfo);

module.expots = router;

