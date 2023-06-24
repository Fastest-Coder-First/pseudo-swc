const mongoose = require("mongoose");
// Transaction schema for MongoDB
const transactionSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.ObjectId,
        ref: 'User'
    },

    date: { type: Date, default: Date.now },
    description: { type: String, default: null },
    category: { type: Number },
    type: { type: Number },

    amount: { type: String, default: null },
    currency: { type: String, default: 'INR' },
    status: { type: String, default: null },
    category: { type: Number, default: null },
    type: { type: Number, default: null },
    description: { type: String, default: null },
    method: { type: String, default: null },
    card: { type: String, default: null },
    bank: { type: String, default: null },
    merchant: { type: String, default: null },
    
    comments: { type: String, default: null },
});

module.exports =  mongoose.model("transaction", transactionSchema);



