import User from "../models/User"

/* Read */
export const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		if (user) res.status(200).json(user)
		else return res.status(404).json({ message: "Unable to find user by id."})
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
}
