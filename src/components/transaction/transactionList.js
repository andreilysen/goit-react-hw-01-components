import React from 'react';
import PropTypes from 'prop-types';

import { TransactionItem } from './transactionItem';

import styles from './transaction.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={styles.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TransactionItem
                type={type}
                amount={amount}
                currency={currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
