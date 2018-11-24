import express from "express";
import crypto from "crypto";

import User from "../models/api";

const router = express.Router();

/* GET ALL BOOKS */
router.get("/", (req, res, next) => {
  User.find((err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

/* GET SINGLE BOOK BY ID */
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id, (err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

/* SAVE BOOK */
router.post("/", (req, res, next) => {
  User.create(req.body, (err, UserDetails) => {
    if (err) return next(err);
    UserDetails.password = crypto
      .createHash("sha256")
      .update(req.body.password)
      .digest("hex");
    res.json(UserDetails);
  });
});

/* UPDATE BOOK */
router.put("/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

/* DELETE BOOK */
router.delete("/:id", (req, res, next) => {
  User.findByIdAndRemove(req.params.id, req.body, (err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

module.exports = router;
