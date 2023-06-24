const { Schema } = require("mongoose");

// Transaction schema for MongoDB
const transactionSchema = new Schema({
    datetime: { type: String, default: null },
    description: { type: String, default: null },
    type: { type: String, default: null },
    category: { type: String, default: null },

    amount: { type: Number, default: null },
    currency: { type: String, default: null },
    status: { type: String, default: null },

    method: { type: String, default: null },
    card: { type: String, default: null },
    bank: { type: String, default: null },
    merchant: { type: String, default: null },
    
    comments: { type: String, default: null },
});

module.exports = { transactionSchema };
