const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.get("/contacts", (req, res) => {
  console.log("🌸");
  Contact.find()
    .then(found => {
      return res.json(found);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting contact data." });
    });
});

module.exports = router;
