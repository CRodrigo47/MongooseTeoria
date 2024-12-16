const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.get("/", (req, res) => {
  userModel
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.post("/", (req, res) => {
  const newUser = userModel(req.body);
  newUser
    .save()
    .then(res.json({ status: "ok", data: newUser }))
    .catch((err) => res.json({ message: err }));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  userModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  userModel
    .updateOne(
      { _id: id },
      {
        $set: req.body,
      }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.delete("/:_id", (req, res) => {
  const _id = req.params._id;
  userModel
    .deleteOne({ _id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
