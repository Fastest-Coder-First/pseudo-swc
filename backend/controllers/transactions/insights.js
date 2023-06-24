exports.getShares = async (req, res) => {
    try {
        const transactions = await Transaction.find({user_id: req.user.user_id}).transaction_list;
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: createDisplayJSON(transactions),
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}