import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCards from './components/StatCards';
import DailySellingChart from './components/DailySellingChart';
import LatestTransactions from './components/LatestTransactions';
import PopularProducts from './components/PopularProducts';
import StockReceiptIssued from './components/StockReceiptIssued';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Left Navigation Sidebar */}
      <Sidebar />

      {/* Main Dashboard Area */}
      <main className="main-content">
        <Header />

        <div className="dashboard-body">
          {/* Top 4 KPI Cards */}
          <StatCards />

          {/* Daily Selling Activity Chart */}
          <DailySellingChart />

          {/* Bottom 3 Cards Row */}
          <div className="bottom-grid">
            <LatestTransactions />
            <PopularProducts />
            <StockReceiptIssued />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
