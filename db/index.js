const mongoose = require("mongoose");
const data = require("./data.json");
const Contact = require("../models/Contact");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(conn => {
    console.log(`Connected to ${conn.connections[0].name}`);

    // Contact.insertMany(data)
    //   .then(createdContacts => {
    //     createdContacts.forEach(contact => console.log(contact.name));
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  })
  .catch(err => {
    console.log(`Error connecting to the DB: ${err}`);
  });

module.exports = {
  disconnect: () => {
    mongoose.connection.close();
  }
};
