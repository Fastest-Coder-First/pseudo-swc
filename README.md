# Pseudo SWC

### Github Copilot Examples
#### We haved used github copilot a lot in our submission you can check images folder to know some of our use cases or check comments in our code to see examples
* Example of copilot used to generate routes
<img width="1792" alt="Screenshot 2023-06-24 at 6 03 27 PM" src="https://github.com/Fastest-Coder-First/pseudo-swc/assets/85542689/324c69b7-807b-43e6-9f00-4302c138fed6">

* Example of copilot used to create controller
<img width="1792" alt="Screenshot 2023-06-24 at 6 03 50 PM" src="https://github.com/Fastest-Coder-First/pseudo-swc/assets/85542689/9508d23b-0ca6-494b-9bf9-b649da4e4972">
<img width="1792" alt="Screenshot 2023-06-24 at 6 03 56 PM" src="https://github.com/Fastest-Coder-First/pseudo-swc/assets/85542689/eb53fd1c-4133-4325-85c4-fb6074ec8649">


* Test cases for data population using copilot 
<img width="1792" alt="Screenshot 2023-06-24 at 6 04 31 PM" src="https://github.com/Fastest-Coder-First/pseudo-swc/assets/85542689/ca9caa95-8eaf-4f43-8dbd-3e7d2a3273c9">

### Architure flow

* Architure 
![WhatsApp Image 2023-06-24 at 18 07 36](https://github.com/Fastest-Coder-First/pseudo-swc/assets/85542689/3d28b22a-d6cb-4592-9d15-c75fcdbf22d3)

* Backend flow
![WhatsApp Image 2023-06-24 at 18 08 07](https://github.com/Fastest-Coder-First/pseudo-swc/assets/85542689/1bd20519-ec3b-4d89-a389-4fe29dd79d04)

# Summary

This document aims to summarize the functioning of our product - a feature-rich personal finance tracker. This product was built solely using Javascript, HTML and CSS. It provides a comprehensive description of its architecture and usage. This module allows users to create various kinds of transactions – expenses, incomes, and investments.

# Using GitHub Copilot

Before elaborating on the architectural aspects, we would like to emphasize the impact GitHub copilot made on our coding journey during this hackathon. We were able to get the code for routing the request easily through a simple natural language comment that simplified the rather laborious job.

At every step we were prompted to include the right files before proceeding to use the objects or functions. It also simplified the handling of filters. A simple mention of the query and the corresponding column gave auto complete suggestions of the exact check function.

Implementing endpoints for API calls has never been easier. We did not need to google how an API worked – GitHub copilot knew exactly how and that allowed us to focus our efforts on the ideation instead of being bothered by the exact semantics of the API.

Copilot even allowed us to conveniently generate test cases to test components of our code. A simple natural language comment generated them iteratively and helped us debug with much higher efficiency. It indeed sped up a lot of routine tasks and let us double down on innovating as much as possible in the competitive time frame.

# Architecture and Usage

Users are required to create an account before being able to use this platform. We have set up the necessary authentication and have securely maintained the credentials using MongoDB (mongoose package for NodeJS).

Once the user has logged in, they are directed to a welcome page that displays some overall metrics of their finances. This includes their total bank balance, their total income for the past month and their net expenditure. It also features the day-wise variation in their expenditure for delivering insights into their spending patterns.

In this dashboard page, multiple tabs exist for each kind of transaction – expense, income, investments, and all transactions. As the name suggests these pages fetch and showcase all transactions of the corresponding kind. They also have utilities to add, edit, and delete transactions in an intuitive user-friendly way. We have further provided a provision for the user to filter these transactions as per various parameters such as amount of money, category of transaction and date of transaction to name a few.

## API Calls:
•	Register
•	Login
•	Welcome
•	Logout
•	GetTransactions
•	AddTransactions
•	DeleteTransactions
•	UpdateTransactions
•	GetExpenses
•	GetIncome
•	GetInvestment
•	FilterTransactions

These operations generate API requests that are routed accordingly on the backend and make the required updates before displaying the results. For each operation, we employ the authentication checking middleware and proceed to make the necessary operation once all the checks pass. 

All the program files have been organized under the MVC paradigm for the best realization of software engineering principles. We had aimed to create more insights into spending patterns and had worked out the mathematical parts but due to lack of time we were unable to implement them.
