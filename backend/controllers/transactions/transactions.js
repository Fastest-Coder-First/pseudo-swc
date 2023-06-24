
// code for getting trnasactions get request controller function
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await User.findById(req.user.user_id).transaction_list;
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}

// code for adding trnasactions post request controller function
exports.addTransaction = async (req, res) => {
    try {
        const { text, amount } = req.body;
        const transactions = await User.findById(req.user.user_id).transaction_list;
        return res.status(201).json({
            success: true,
            data: transaction,
        });
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error",
            });
        }
    }
}

// code for deleting trnasactions delete request controller function
exports.deleteTransaction = async (req, res) => {
    try {
        const transactions = await User.findById(req.user.user_id).transaction_list;
        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found",
            });
        }
        await transaction.remove();
        return res.status(200).json({
            success: true,
            data: {},
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}

// code for updating trnasactions put request controller function
exports.updateTransaction = async (req, res) => {
    try {
        const { text, amount } = req.body;
        const transactions = await User.findById(req.user.user_id).transaction_list;
        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found",
            });
        }
        transaction.text = text;
        transaction.amount = amount;
        await transaction.save();
        return res.status(200).json({
            success: true,
            data: transaction,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }   
}

