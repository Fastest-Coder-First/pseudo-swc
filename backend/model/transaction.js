const { Schema, model } = require("mongoose");
const {User} = require("./user");
// Transaction schema for MongoDB
const transactionSchema = new Schema({
    user_id:{
        type: mongoose.ObjectId,
        ref: 'User'
    },

    amount: { type: String, default: null },
    currency: { type: String, default: 'INR' },
    status: { type: String, default: null },

    method: { type: String, default: null },
    card: { type: String, default: null },
    bank: { type: String, default: null },
    merchant: { type: String, default: null },
    
    comments: { type: String, default: null },
});

module.exports = { transactionSchema };


