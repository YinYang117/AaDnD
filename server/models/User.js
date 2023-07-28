import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {type: String, required: true, min: 2, max: 30,},
		gamertag: {type: String, min:2, max: 30},
		email: {type: String, required: true, min: 5, max: 100, unique: true,},
		password: {type: String, required: true, min: 5,},
		userAvatar: {type: String, default: "",},
		characters: {type: Array, default: [],},
	},
	{ timestamps: true },
);

const User = mongoose.model("User", UserSchema);
export default User;
