/* We'll write the schema and register our model for the users here */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    eyeColor: String,
    age: Number,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other"
    },
    company: String,
    email: String,
    phone: String,
    address: String
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
