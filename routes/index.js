import express from "express";
import User from "../models/api";

const router = express.Router();

/* GET ALL USERS */
router.get("/", (req, res, next) => {
  User.find((err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

/* GET SINGLE USER BY ID */
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id, (err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

/* SAVE USER */
router.post("/", (req, res, next) => {
  User.create(req.body, (err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

/* UPDATE USER */
router.put("/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

/* DELETE USER */
router.delete("/:id", (req, res, next) => {
  User.findByIdAndRemove(req.params.id, req.body, (err, UserDetails) => {
    if (err) return next(err);
    res.json(UserDetails);
  });
});

module.exports = router;
