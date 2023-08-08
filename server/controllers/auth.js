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

/* Log in */
export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email }); // because email is unique, should only ever return 1 result if found
		if (!user) return res.status(400).json({ message: "No user found with that email" }) // Could change error message to "Invalid credentials" to obfuscate if the email exists

		const isPasswordMatch = await bcrypt.compare(password, user.password)
		if (!isPasswordMatch) return res.status(400).json({ message: "Incorrect Password" })

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET) // A String from the env file
		delete user.password; // deletes from the user object the password key. Hiding it from returning to frontend.
		res.status(200).json({ token, user });
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
}
