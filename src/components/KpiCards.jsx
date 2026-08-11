'use client';

import React from 'react';
import {
  Briefcase,
  PiggyBank,
  ClipboardList,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp
} from 'lucide-react';
import './KpiCards.css';

export default function KpiCards() {
  const cards = [
    {
      title: 'Today Gross Profit',
      amount: '$23,560,000',
      trend: '8.5% Up from yesterday',
      isUp: true,
      icon: Briefcase,
      iconBg: '#f0f0f8',
      iconColor: '#6366f1',
      arrowBg: '#eef2ff',
      arrowColor: '#6366f1',
    },
    {
      title: 'Today Net Profit',
      amount: '$3,560,000',
      trend: '8.5% Up from yesterday',
      isUp: true,
      icon: PiggyBank,
      iconBg: '#fff4ee',
      iconColor: '#f97316',
      arrowBg: '#fff4ee',
      arrowColor: '#ef4444',
    },
    {
      title: 'Today Item Receipt',
      amount: '$1,500,350',
      trend: '8.5% Up from yesterday',
      isUp: true,
      icon: ClipboardList,
      iconBg: '#edf4ff',
      iconColor: '#3b82f6',
      arrowBg: '#eef2ff',
      arrowColor: '#6366f1',
    },
    {
      title: 'Today Estimation Loss',
      amount: '$35,000',
      trend: '8.5% Down from yesterday',
      isUp: false,
      icon: TrendingDown,
      iconBg: '#fff0f0',
      iconColor: '#ef4444',
      arrowBg: '#fff0f0',
      arrowColor: '#ef4444',
    },
  ];

  return (
    <div className="kpi-cards-grid">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div key={idx} className="kpi-card">
            <div className="kpi-card-top">
              <div className="kpi-icon-box" style={{ backgroundColor: card.iconBg }}>
                <Icon size={18} style={{ color: card.iconColor }} />
              </div>
              <div className="kpi-arrow-box" style={{ backgroundColor: card.arrowBg }}>
                {card.isUp
                  ? <ArrowUpRight size={14} style={{ color: card.arrowColor }} />
                  : <ArrowDownRight size={14} style={{ color: card.arrowColor }} />
                }
              </div>
            </div>

            <div className="kpi-card-body">
              <span className="kpi-card-label">{card.title}</span>
              <h3 className="kpi-card-amount">{card.amount}</h3>
            </div>

            <div className="kpi-card-footer">
              {card.isUp
                ? <TrendingUp size={13} className="trend-icon-up" />
                : <TrendingDown size={13} className="trend-icon-down" />
              }
              <span className={`kpi-trend-text ${card.isUp ? 'trend-up' : 'trend-down'}`}>
                {card.trend}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
