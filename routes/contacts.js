const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const data = require("../db/data.json");

router.get("/contacts", (req, res) => {
  Contact.find()
    .then(found => {
      return res.json(found);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting contact data." });
    });
});

router.post("/contacts", (req, res) => {
  return Contact.find()
    .then(found => {
      if (found.length === 0) {
        Contact.insertMany(data)
          .then(createdContacts => {
            return res.json(createdContacts);
          })
          .catch(err => {
            console.log(err);
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
