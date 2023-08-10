import express from "express";
import { getUser } from "../controllers/users.js";
// import { getUserFriends } from "../controllers/users.js"; // I might not need this functionality
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Read */
router.get("/:id", verifyToken, getUser); // :id is numeric variable for our query string to find a certain user
// router.get("/:id/frieds", verifyToken, getUserFriends) // To find all friends (Might not need this functionality.)

export default router;
