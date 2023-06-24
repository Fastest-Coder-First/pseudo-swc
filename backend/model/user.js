const { Schema, model } = require("mongoose");
const { transactionSchema } = require("./transaction.js");

const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  transaction_list: [transactionSchema],
});

module.exports = model("user", userSchema);
