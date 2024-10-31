import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from local storage 
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  // Save transactions to local storage 
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((_, index) => index !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, item) => acc + Math.abs(item.amount), 0);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="balance">
        <h2>Balance: ₹{(income - expense).toFixed(2)}</h2>
      </div>
      <div className="income-expense">
        <div className="income">
          <h3>Income</h3>
          <p>₹{income.toFixed(2)}</p>
        </div>
        <div className="expense">
          <h3>Expense</h3>
          <p>₹{expense.toFixed(2)}</p>
        </div>
      </div>
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
};

export default App;
