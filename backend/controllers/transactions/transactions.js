// import transaction model
const {User, Transaction} = require("../../model/user");


// code for getting trnasactions get request controller function
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.user_id }).exec();
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

// code for adding trnasactions post request controller function
exports.addTransaction = async (req, res) => {
    try {
        // get transaction data from request body according to transaction model
        // console.log(req.body);
        // get transaction data from request body according to transaction model
        const { user_id, description , amount, type, catagory, status, method, card, bank, merchant, comments, currency, date  } = req.body;
        console.log(description);
        // let newTransaction = await Transaction.create({
        //     ...req.body,
        // });
        console.log({...req.body});
        // console.log(newTransaction);
        // save transaction to database
        const newTransaction = new Transaction({
            user_id: user_id,
            date: date,
            amount: amount,
            description: description,
            currency: currency,
            category: catagory,
            type: type,
            status: status,
            method: method,
            card: card,
            bank: bank,
            merchant: merchant,
            comments: comments,
          });
          newTransaction.save(function(err,res){
            if (err){
                console.log(err);
            }
            else{
                return res.status(201).json({
                    success: true,
                });
            }});
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            console.log(err);
            return res.status(500).json({
                success: false,
                error: "Server Error",
            });
        }
    }
}

// code for deleting transactions delete request controller function
exports.deleteTransaction = async (req, res) => {
    try {
        const transactions = await Transaction.findByIdAndDelete(req.transaction_id).exec();
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



// generate sample data for testing addTransaction function
// const transactions = [
//     {
//         id: 1,
//         description: "Salary",
//         type: "income",
//         category: "income",
//         amount: 100000,
//         status: "cleared",
//         method: "cash",
//         card: "none",
//         bank: "none",
//         merchant: "none",
//         comments: "none",
//     },
//     {
//         id: 2,
//         description: "Rent",
//         type: "expense",
//         category: "expense",
//         amount: 10000,
//         status: "cleared",
//         method: "cash",
//         card: "none",
//         bank: "none",
