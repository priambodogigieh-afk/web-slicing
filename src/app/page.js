'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import KpiCards from '../components/KpiCards';
import DailySellingChart from '../components/DailySellingChart';
import LatestTransactions from '../components/LatestTransactions';
import PopularProducts from '../components/PopularProducts';
import StockReceiptIssued from '../components/StockReceiptIssued';

export default function CommandCenterPage() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('Dashboard');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="command-center-layout">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Command Center Body */}
      <main className="command-center-main">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <div className="command-center-body">
          {/* 4 KPI Metric Summary Cards */}
          <KpiCards />

          {/* Full-width Daily Selling Activity Chart */}
          <DailySellingChart />

          {/* 3-Column Bottom Grid: Latest Transactions, Popular Products, Stock Receipt */}
          <div className="bottom-three-grid">
            <LatestTransactions />
            <PopularProducts />
            <StockReceiptIssued />
          </div>
        </div>
      </main>
    </div>
  );
}
