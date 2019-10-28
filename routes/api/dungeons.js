const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load models
const Dungeons = require("../../models/Dungeons.js");

router.post("/", (req, res) => {
  Dungeons.create({ mapArray: req.body.mapArray, Createdby: req.body.Createdby }).then(game => {
    console.log(req.body);
    res.json(game);
  });
});

router.get("/my-dungeons/:userId", (req,res) => {
  Dungeons.find({
    Createdby: req.params.userId
  }).then(dungeons => {
    res.json({dungeons});
  });
});

module.exports = router;
