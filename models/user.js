const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, trim: true, required: true },
  firstname: { type: String, trim: true, required: true },
  lastname: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  isManager: { type: Boolean, required: true },
  teamid: { type: String, required: true }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
