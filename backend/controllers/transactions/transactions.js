// import transaction model
const Transaction = require("../../model/transaction");


// code for getting trnasactions get request controller function
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user_id: req.user.user_id }).exec();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}

exports.filterTransactions = async(req, res)=> {
  const filterOptions = req.body.filter; // Assuming filter options are sent in the request body

  try {
    const query = Transaction.find();

    // Filter entries since a certain day
    if (filterOptions.sinceDate) {
      query.where('date').gte(filterOptions.sinceDate);
    }

    // Filter entries with specific categories
    if (filterOptions.categories && filterOptions.categories.length > 0) {
      query.where('category').in(filterOptions.categories);
    }

    // Filter entries with specific types
    if (filterOptions.types && filterOptions.types.length > 0) {
      query.where('type').in(filterOptions.types);
    }

    // Filter entries with specific modes of payment
    if (filterOptions.paymentModes && filterOptions.paymentModes.length > 0) {
      query.where('paymentMode').in(filterOptions.paymentModes);
    }

    // Filter entries with amount greater than a value
    if (filterOptions.minAmount) {
      query.where('amount').gt(filterOptions.minAmount);
    }

    // Filter entries with a specific user ID
    if (filterOptions.userId) {
      query.where('user_id').equals(filterOptions.userId);
    }

    // Execute the query
    const filteredTransactions = await query.exec();

    // Return the filtered transactions
    return res.json(filteredTransactions);
  } catch (error) {
    console.error('Error filtering transactions:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

// code for adding trnasactions post request controller function
exports.addTransaction = async (req, res) => {
    try {
        // get transaction data from request body according to transaction model
        const { description , amount, type, category, status, method, card, bank, merchant, comments, currency, date  } = req.body;
        // save transaction to database
        const newTransaction = Transaction.create({
            user_id: req.user.user_id,
            date: date,
            amount: amount,
            description: description,
            currency: currency,
            category: category,
            type: type,
            status: status,
            method: method,
            card: card,
            bank: bank,
            merchant: merchant,
            comments: comments,
          });
        return res.status(201).json({
            success: true,
        });
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
        await Transaction.findByIdAndDelete(req.params.id).exec();
        return res.status(200);
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}

// code for updating trnasactions put request controller function
exports.updateTransaction = async (req, res) => {
    // const transactionId = req.body.transaction_id; // Assuming transaction_id is part of the URL path
    const updatedData = req.body; // Assuming the updated data is sent in the request body
    // get id from request params
    const id = req.params.id;
    try {
        // Find the transaction by ID and update the fields
        const transaction = await Transaction.find({_id : id, user_id: req.user.user_id }).exec();
        if(transaction.length === 0) {
            return res.status(404).json({ error: 'Transaction not found' });
        }
        const updatedTransaction = await Transaction.findByIdAndUpdate(
        id,
        updatedData,
        { new: true }
        );

        if (!updatedTransaction) {
        // Handle case when the transaction is not found
            return res.status(404).json({ error: 'Transaction not found' });
        }

        // Transaction updated successfully
        return res.status(200).json({ transaction: updatedTransaction });
    } catch (error) {
        // Handle any errors that occurred during the update
        console.error('Error updating transaction:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
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
