const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shiftSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  capacity: { type: Number, required: true },
  date: { type: Date, required: true },
  start: { type: Number, required: true },
  end: { type: Number, required: true },
  team_id: { type: String, required: true }
});

const Shift = mongoose.model("Shift", shiftSchema);

module.exports = Shift;
