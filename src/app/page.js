'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import KpiCards from '../components/KpiCards';
import DashboardTabs from '../components/DashboardTabs';
import DailySellingChart from '../components/DailySellingChart';
import LatestTransactions from '../components/LatestTransactions';
import PopularProducts from '../components/PopularProducts';
import StockReceiptIssued from '../components/StockReceiptIssued';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        <Header />
        <div className="dashboard-body">
          <DashboardTabs />
          <KpiCards />
          <DailySellingChart />
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
