import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionsStatistics from './TransactionsStatistics';
import TransactionsBarChart from './TransactionsBarChart';

const TransactionsTable = ({ selectedMonth }) => {
  const [transactions, setTransactions] = useState([]);
  const [totalSale, setTotalSale] = useState(0);
  const [totalSoldItems, setTotalSoldItems] = useState(0);
  const [totalNotSoldItems, setTotalNotSoldItems] = useState(0);
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products?month=${selectedMonth}`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, [selectedMonth]);

  useEffect(() => {
    const calculateStatistics = () => {
      let totalSaleAmount = 0;
      let soldItemsCount = 0;
      let notSoldItemsCount = 0;

      transactions.forEach(transaction => {
        totalSaleAmount += transaction.sold ? transaction.price : 0;
        soldItemsCount += transaction.sold ? 1 : 0;
        notSoldItemsCount += transaction.sold ? 0 : 1;
      });

      setTotalSale(totalSaleAmount);
      setTotalSoldItems(soldItemsCount);
      setTotalNotSoldItems(notSoldItemsCount);
    };

    calculateStatistics();
  }, [transactions]);

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/barChart?month=${selectedMonth}`);
        setBarChartData(response.data);
      } catch (error) {
        console.error('Error fetching bar chart data:', error);
      }
    };

    fetchBarChartData();
  }, [selectedMonth]);

  return (
    <div>
      <h2>Transactions Table</h2>
      <TransactionsStatistics totalSale={totalSale} totalSoldItems={totalSoldItems} totalNotSoldItems={totalNotSoldItems} />
      <TransactionsBarChart barChartData={barChartData} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td>{transaction.price}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
