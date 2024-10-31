import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <li key={index} className={transaction.amount < 0 ? 'expense-item' : 'income-item'}>
              <span>{transaction.date} - {transaction.category}</span>
              <span>{transaction.text}</span>
              <span>₹{transaction.amount.toFixed(2)}</span>
              <button className="delete-btn" onClick={() => deleteTransaction(index)}>X</button>
            </li>
          ))
        ) : (
          <li>No transactions yet</li>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
