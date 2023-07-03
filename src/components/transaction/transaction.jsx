import React from 'react';
import css from './transactioncss.module.css';

const Transaction = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

const TransactionItem = ({ transaction }) => {
  const { type, amount, currency } = transaction;

  return (
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
};

export default Transaction;
