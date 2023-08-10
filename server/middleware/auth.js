import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
	try {
		let token = req.header("Authorization")

		if (!token) {
			return res.status(403).send("Access Denied");
		}

		if (token.startsWith("Bearer ")) { // Bearer string will be set on front end
			token = token.slice(7, token.length).trimStart() // Cuts off the start of the string. trimLeft() is depreciated
		}

		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified // Overriding the user?
		next(); // Next middleware
	} catch (e) {
		res.status(500).json({ error: e.message});
	}
}
