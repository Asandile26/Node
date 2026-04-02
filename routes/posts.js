//Common js module

// const express = require("express");

import express from "express";
import {
  deletePost,
  getPost,
  getPosts,
  newPost,
  updatePost,
} from "../controller/postController.js";
export const router = express.Router();

//GET all posts
router.get("/", getPosts);

//GET single post
router.get("/:id", getPost);

//Create new post

router.post("/", newPost);

//Update Post
router.put("/:id", updatePost);

//Delete post
router.put("/:id", deletePost);

export default router;
