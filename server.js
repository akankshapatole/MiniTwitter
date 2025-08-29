// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.js"; // notice .js at the end
import postRoutes from "./routes/post.js";
import auth from "./middleware/auth.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes); // ✅ This line is missing

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/twitterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
