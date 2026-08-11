'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './DashboardTabs.css';

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState('General');
  const [year, setYear] = useState('2024');
  const [yearOpen, setYearOpen] = useState(false);

  const tabs = ['General', 'Inventory', 'Cashier'];
  const years = ['2024', '2023', '2022', '2021'];

  return (
    <div className="dashboard-tabs-bar">
      {/* Tab buttons */}
      <div className="tabs-list">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Year dropdown */}
      <div className="year-dropdown">
        <button
          className="year-btn"
          onClick={() => setYearOpen(!yearOpen)}
        >
          <span>{year}</span>
          <ChevronDown size={14} className={`year-chevron ${yearOpen ? 'open' : ''}`} />
        </button>

        {yearOpen && (
          <div className="year-popover">
            {years.map((y) => (
              <button
                key={y}
                className={`year-option ${year === y ? 'year-option-active' : ''}`}
                onClick={() => { setYear(y); setYearOpen(false); }}
              >
                {y}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
