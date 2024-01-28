// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import express from "express";      //
import cors from "cors";    //
import cookieParser from "cookie-parser"; //
import connectDB from "./db/index.js";
// import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

// connectDB()
  // .then(() => {
  //   app.listen(process.env.PORT || 8000, () => {
  //     console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
  //   });
  // })
  // .catch((err) => {
  //   console.log("MONGO db connection failed !!! ", err);
  // });

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser);

app.get("/", async function (req, res) {
    res.send("hi");
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
});