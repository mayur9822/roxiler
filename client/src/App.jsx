// App.jsx
import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionsStatistics from './components/TransactionsStatistics';
import TransactionsBarChart from './components/TransactionsBarChart';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState('March');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div>
      <h1>Transactions Dashboard</h1>
      <label htmlFor="monthSelect">Select Month:</label>
      <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
        
      </select>
      <TransactionsTable selectedMonth={selectedMonth} />
      <TransactionsStatistics selectedMonth={selectedMonth} />
      <TransactionsBarChart selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
