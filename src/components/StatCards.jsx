'use client';

import React from 'react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  Receipt,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import './StatCards.css';

export default function StatCards() {
  const cardsData = [
    {
      title: 'Today Gross Profit',
      amount: '$23,560,000',
      trend: '+8.5%',
      trendDesc: 'vs yesterday',
      isUp: true,
      icon: DollarSign,
      iconBg: 'rgba(239, 68, 68, 0.12)',
      iconColor: '#ef4444',
      sparkline: [20, 35, 30, 45, 40, 60, 55, 75, 70, 90]
    },
    {
      title: 'Today Net Profit',
      amount: '$3,560,000',
      trend: '+8.5%',
      trendDesc: 'vs yesterday',
      isUp: true,
      icon: TrendingUp,
      iconBg: 'rgba(16, 185, 129, 0.12)',
      iconColor: '#10b981',
      sparkline: [15, 25, 20, 35, 45, 40, 55, 65, 80, 85]
    },
    {
      title: 'Today Item Receipt',
      amount: '$1,500,350',
      trend: '+8.5%',
      trendDesc: 'vs yesterday',
      isUp: true,
      icon: Receipt,
      iconBg: 'rgba(2, 132, 199, 0.12)',
      iconColor: '#0284c7',
      sparkline: [30, 25, 40, 50, 45, 60, 55, 70, 75, 95]
    },
    {
      title: 'Today Estimation Loss',
      amount: '$35,000',
      trend: '-8.5%',
      trendDesc: 'vs yesterday',
      isUp: false,
      icon: AlertTriangle,
      iconBg: 'rgba(245, 158, 11, 0.12)',
      iconColor: '#f59e0b',
      sparkline: [80, 75, 65, 60, 50, 45, 35, 30, 25, 20]
    }
  ];

  const renderSparkline = (points, color) => {
    const width = 100;
    const height = 30;
    const min = Math.min(...points);
    const max = Math.max(...points);

    const coords = points.map((val, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - ((val - min) / (max - min || 1)) * (height - 6) - 3;
      return `${x},${y}`;
    });

    const pathData = `M ${coords.join(' L ')}`;

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="stat-sparkline-svg">
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <div className="stat-cards-grid">
      {cardsData.map((card, idx) => {
        const IconComponent = card.icon;
        return (
          <div key={idx} className="modern-card stat-card">
            <div className="stat-card-top">
              <div className="stat-icon-box" style={{ backgroundColor: card.iconBg }}>
                <IconComponent size={20} style={{ color: card.iconColor }} />
              </div>
              <div className="sparkline-wrapper">
                {renderSparkline(card.sparkline, card.iconColor)}
              </div>
            </div>

            <div className="stat-card-mid">
              <span className="stat-label">{card.title}</span>
              <h2 className="stat-value">{card.amount}</h2>
            </div>

            <div className="stat-card-bottom">
              <span className={`badge-pill ${card.isUp ? 'badge-pill-success' : 'badge-pill-danger'}`}>
                {card.isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {card.trend}
              </span>
              <span className="stat-trend-desc">{card.trendDesc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
