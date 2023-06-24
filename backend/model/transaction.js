const { Schema } = require("mongoose");

// Transaction schema for MongoDB
const transactionSchema = new Schema({
    datetime: { type: String, default: null },
    description: { type: String, default: null },
    type: { type: Number, default: null },
    category: { type: Number, default: null },

    amount: { type: Number, default: null },
    currency: { type: String, default: null },
    status: { type: Number, default: null },

    method: { type: Number, default: null },
    card: { type: String, default: null },
    bank: { type: String, default: null },
    merchant: { type: String, default: null },
    
    comments: { type: String, default: null },
});

module.exports = { transactionSchema };


