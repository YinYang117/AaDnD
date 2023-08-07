import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* Register / Signup User */
export const register = async (req, res) => {
	try {
		const { name, gamertag, email, password, userAvatar, characters } = req.body // req from frontend will have these
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({
			name, gamertag, email, password: passwordHash, userAvatar, characters
		});

		const savedUser = await newUser.save();
		res.status(201).json(savedUser) // 201 created. return json version to frontend
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
}
