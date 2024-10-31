import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState(''); 
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !date || !category) return;

    addTransaction({
      text,
      amount: parseFloat(amount),
      date,
      category,
    });

    // Reset the form fields after submission
    setText('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <div className="add-transaction">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Date
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Salary">Salary</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
          </select>
        </label>
        <label>
          Description
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description"
            required
          />
        </label>
        <label>
          Amount <br />
          (negative - expense, positive - income)
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
