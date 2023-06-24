const { Schema } = require("mongoose");

// Transaction schema for MongoDB
const transactionSchema = new Schema({
    transaction_description: { type: String, default: null },
    transaction_datetime: { type: String, default: null },
    transaction_amount: { type: String, default: null },
    transaction_type: { type: String, default: null },
    transaction_category: { type: String, default: null },
    transaction_status: { type: String, default: null },
    transaction_currency: { type: String, default: null },
    transaction_method: { type: String, default: null },
    transaction_card: { type: String, default: null },
    transaction_bank: { type: String, default: null },
    transaction_merchant: { type: String, default: null },
    transaction_comments: { type: String, default: null },
});

module.exports = { transactionSchema };
