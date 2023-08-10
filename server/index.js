import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import {fileURLToPath} from "url";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets'))); // sets directory of where we keep our assets. Can change to keep them in a sw3 bucket or other external source later.

/* File Storage */
const storage = multer.diskStorage({ // documentation on npm multer page
	destination: function (req, file, cb) {
		cb(null, "public/assets");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	},
});



/* Routes with Files */
// Uploads User picture as a middleware before registering.
const upload = multer({ storage });
// Beause we need the upload variable from multer we dont want to move this to the other auth routes.
app.post("/auth/register", upload.single("userAvatar"), register)

/* Routes */
app.use("/auth", authRoutes)
app.use("/users", userRoutes)

/* Mongoose Setup */
const PORT = process.env.PORT || 5051; // 5051 backup
mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	app.listen(PORT, () => console.log(`The Server is alive! On port: ${PORT}`));
}).catch((e) => console.log(`The Server did not connect. \n ${e}`))
