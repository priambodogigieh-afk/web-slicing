'use client';

import React, { useState } from 'react';
import { BarChart3, PieChart, ArrowUpRight, TrendingUp } from 'lucide-react';
import './RevenueCategoryCharts.css';

export default function RevenueCategoryCharts() {
  const [activeTab, setActiveTab] = useState('Hourly');

  const hourlyBars = [
    { label: '08:00', height: 40, revenue: '$2,400' },
    { label: '10:00', height: 65, revenue: '$4,100' },
    { label: '12:00', height: 90, revenue: '$6,800' },
    { label: '14:00', height: 100, revenue: '$7,500' },
    { label: '16:00', height: 80, revenue: '$5,900' },
    { label: '18:00', height: 55, revenue: '$3,800' },
    { label: '20:00', height: 35, revenue: '$2,100' },
  ];

  const categories = [
    { name: 'Medical Supplies', percent: 45, color: '#6366f1', total: '$11,070' },
    { name: 'Electronics & Tech', percent: 30, color: '#10b981', total: '$7,380' },
    { name: 'Hardware Parts', percent: 15, color: '#06b6d4', total: '$3,690' },
    { name: 'Office Supplies', percent: 10, color: '#f59e0b', total: '$2,460' },
  ];

  return (
    <div className="charts-split-container">
      {/* Revenue Performance Chart */}
      <div className="nextgen-card chart-primary-card">
        <div className="chart-card-top">
          <div className="chart-header-title">
            <BarChart3 size={18} className="icon-indigo" />
            <h3 className="chart-title-text">Hourly Sales & Revenue Stream</h3>
          </div>
          <div className="range-pill-group">
            <button
              className={`range-pill ${activeTab === 'Hourly' ? 'active' : ''}`}
              onClick={() => setActiveTab('Hourly')}
            >
              Hourly
            </button>
            <button
              className={`range-pill ${activeTab === 'Daily' ? 'active' : ''}`}
              onClick={() => setActiveTab('Daily')}
            >
              Daily
            </button>
          </div>
        </div>

        <div className="bar-chart-wrapper">
          {hourlyBars.map((bar, i) => (
            <div key={i} className="bar-column">
              <div className="bar-container">
                <div
                  className="bar-fill"
                  style={{ height: `${bar.height}%` }}
                >
                  <span className="bar-tooltip">{bar.revenue}</span>
                </div>
              </div>
              <span className="bar-label">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Sales Distribution (Donut Chart) */}
      <div className="nextgen-card chart-secondary-card">
        <div className="chart-card-top">
          <div className="chart-header-title">
            <PieChart size={18} className="icon-emerald" />
            <h3 className="chart-title-text">Sales by Category</h3>
          </div>
        </div>

        <div className="category-donut-container">
          <div className="donut-graphic">
            <svg viewBox="0 0 100 100" className="donut-svg">
              <circle cx="50" cy="50" r="38" stroke="#6366f1" strokeWidth="14" strokeDasharray="107 131" strokeDashoffset="0" fill="none" />
              <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="14" strokeDasharray="71 167" strokeDashoffset="-107" fill="none" />
              <circle cx="50" cy="50" r="38" stroke="#06b6d4" strokeWidth="14" strokeDasharray="35 203" strokeDashoffset="-178" fill="none" />
              <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="14" strokeDasharray="24 214" strokeDashoffset="-213" fill="none" />
            </svg>
            <div className="donut-center-stat">
              <span className="donut-stat-val">100%</span>
              <span className="donut-stat-sub">Distribution</span>
            </div>
          </div>

          <div className="category-legend-list">
            {categories.map((cat, idx) => (
              <div key={idx} className="category-legend-item">
                <div className="legend-name-row">
                  <span className="legend-dot-marker" style={{ backgroundColor: cat.color }}></span>
                  <span className="legend-cat-name">{cat.name}</span>
                </div>
                <div className="legend-val-row">
                  <span className="legend-cat-total">{cat.total}</span>
                  <span className="legend-cat-percent">({cat.percent}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
