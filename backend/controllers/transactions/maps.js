// Create a map of common categories of expenses
const categories = {
    expenses: new Map([
        [1, "Groceries"],
        [2, "Rent"],
        [3, "Utilities"],
        [4, "Transportation"],
        [5, "Dining Out"],
        [6, "Entertainment"],
        [7, "Healthcare"],
        [8, "Education"],
        [9, "Travel"],
        [10, "Clothing"],
        [11, "Home Improvement"],
        [12, "Insurance"],
        [13, "Debt Repayment"],
        [14, "Gifts"],
        [15, "Charity"],
        [16, "Subscriptions"],
        [17, "Personal Care"],
        [18, "Hobbies"],
        [19, "Pet Expenses"],
        [20, "Miscellaneous"]
      ]),
    income: new Map([
        [1, "Salary"],
        [2, "Bonus"],
        [3, "Rental Income"],
        [4, "Freelancing"],
        [5, "Dividends"],
        [6, "Pension"],
        [7, "Government Assistance"],
        [8, "Royalties"],
        [9, "Interest"],
        [10, "Commission"],
        [11, "Sales"],
        [12, "Grants"],
        [13, "Part-time Job"],
        [14, "Alimony"],
        [15, "Real Estate Income"],
        [16, "Savings Withdrawal"],
        [17, "Gifts"],
        [18, "Online Income"],
        [19, "Retirement Savings"],
        [20, "Other"]
      ]),
    investments: new Map new Map([
        [1, "Stocks"],
        [2, "Bonds"],
        [3, "Real Estate"],
        [4, "Mutual Funds"],
        [5, "Exchange-Traded Funds (ETFs)"],
        [6, "Index Funds"],
        [7, "Cryptocurrencies"],
        [8, "Commodities"],
        [9, "Savings Accounts"],
        [10, "Certificates of Deposit (CDs)"],
        [11, "Retirement Accounts (e.g., 401(k), IRA)"],
        [12, "Peer-to-Peer Lending"],
        [13, "Venture Capital"],
        [14, "Angel Investments"],
        [15, "Hedge Funds"],
        [16, "Options"],
        [17, "Futures"],
        [18, "Foreign Currencies"],
        [19, "Precious Metals"],
        [20, "Sustainable Investments"]
      ]),
}

const status = new Map ([
    [1, 'Pending'],
    [2, 'Paid'],
    [3, 'Failed'],
    [4, 'Cancelled'],
    [5, 'Refunded'],
    [6, 'Partial Payment'],
    [7, 'Late Payment'],
    [8, 'Disputed'],
    [9, 'Void'],
    [10, 'Scheduled'],
    [11, 'Completed'],
    [12, 'Processing'],
    [13, 'Authorized'],
    [14, 'Expired'],
    [15, 'Settled'],
    [16, 'Overdue'],
    [17, 'Under Review'],
    [18, 'Awaiting Confirmation'],
    [19, 'On Hold'],
    [20, 'Archived']
]);

const types = new Map ([
    [1,"expense"],
    [2,"income"],
    [3,"investment"],    
]);

const methods = new Map ([
    [1, 'Credit Card'],
    [2, 'Debit Card'],
    [3, 'PayPal'],
    [4, 'Apple Pay'],
    [5, 'Google Pay'],
    [6, 'Bank Transfer'],
    [7, 'Cash'],
    [8, 'Cheque'],
    [9, 'Cryptocurrency'],
    [10, 'Venmo'],
    [11, 'Square'],
    [12, 'Stripe'],
    [13, 'Amazon Pay'],
    [14, 'WeChat Pay'],
    [15, 'Alipay'],
    [16, 'Skrill'],
    [17, 'Neteller'],
    [18, 'Money Order'],
    [19, 'Prepaid Card'],
    [20, 'Contactless Payment']
]);

module.exports = {
    categories,
    status,
    types,
    methods,
};

