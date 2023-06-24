const path = require('path')
require('dotenv').config()
require("./config/database").connect();
const {loginfnc, registerfnc} = require("./controllers/auth/auth");
// import all functions from transaction controller
const {
    getTransactions, 
    addTransaction,
    deleteTransaction,
    updateTransaction,
    filterTransactions,
    getIncome, getExpenses, getInvestment
} = require("./controllers/transactions/transactions");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

const app = express();
const cors = require('cors');


app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.post("/register", registerfnc);

app.post("/login", loginfnc);

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

// route for user profile
app.get("/profile", auth, async (req, res) => {
  // View logged in user profile
  res.send(req.user);
});

// route for user logout
app.post("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    res.status(200).send("Logout successful");
  }
  catch (err) {
    res.send(err);
  }
});

// route for adding transaction
app.post("/addTransaction", auth, addTransaction);

// route for getting transactions
app.get("/getTransactions", auth, getTransactions);

app.get("/getIncome", auth, getIncome);
app.get("/getExpenses", auth, getExpenses);
app.get("/getInvestment", auth, getInvestment);

// route for deleting transaction
app.delete("/deleteTransaction/:id", auth, deleteTransaction);

// route for updating transaction
app.put("/updateTransaction/:id", auth, updateTransaction);

// route for filtering some results
app.put("/filterTransactions", auth, filterTransactions);

    
// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;
