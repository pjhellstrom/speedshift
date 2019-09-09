const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  last_name: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  isManager: { type: Boolean, required: true },
  team_id: { type: String, required: true }
});

userSchema.plugin(passportLocalMongoose);
// // WILL THIS WORK WITH MONGOOSE? =====================
// // Creating a custom method for our User model.
// //This will check if an unhashed password entered by the
// //user can be compared to the hashed password stored in our database
// User.prototype.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };
// // Hooks are automatic methods that run during various phases of the User Model lifecycle
// // In this case, before a User is created, we will automatically hash their password

// User.hook("beforeCreate", function(user) {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });
// return User;

// //====================================================

const User = mongoose.model("User", userSchema);

module.exports = User;
