const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, trim: true, required: true },
  last_name: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  isManager: { type: Boolean, required: true },
  team_id: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
