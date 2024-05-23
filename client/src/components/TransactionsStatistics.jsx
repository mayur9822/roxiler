import React from 'react';

const TransactionsStatistics = ({ totalSale, totalSoldItems, totalNotSoldItems }) => {
  return (
    <div>
      <h2>Transactions Statistics</h2>
      <p>Total Sale: ${totalSale}</p>
      <p>Total Sold Items: {totalSoldItems}</p>
      <p>Total Not Sold Items: {totalNotSoldItems}</p>
    </div>
  );
};

export default TransactionsStatistics;
