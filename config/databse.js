const mongoose = require("mongoose")

const database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://myclasswork2005:12345@cluster0.n18uuex.mongodb.net/blog"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
