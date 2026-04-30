import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/connectDb.js"; // .js add karna

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "ExamNotes AI Backend Running" });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
  connectDb();
});