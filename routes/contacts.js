const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const data = require("../db/data.json");

//CORS middleware
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

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
      } else {
        return res.json("db already populated");
      }
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
