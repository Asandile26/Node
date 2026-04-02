//Common js module
// const express = require("express");
// const path = require("path");
// const posts = require("./routes/posts");

import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import { fileURLToPath } from "url";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFoundHandler from "./middleware/notFound.js";

const port = process.env.PORT;

//Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware
app.use(logger);

//setup static folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/posts", posts);

//Error handler
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port, () => console.log(`Server is up on port ${port}`));
