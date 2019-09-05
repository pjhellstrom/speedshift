const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  isManager: { type: Boolean, required: true },
  team_id: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
