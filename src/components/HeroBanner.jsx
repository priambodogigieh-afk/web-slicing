'use client';

import React from 'react';
import { Sparkles, PlusCircle, PackagePlus, Download, Target, Flame } from 'lucide-react';
import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <div className="hero-banner-card">
      <div className="hero-left-content">
        <div className="hero-tag-row">
          <span className="hero-status-pill">
            <span className="live-pulse"></span>
            System Online • POS Terminal #01
          </span>
          <span className="hero-time-pill">
            Today: Aug 11, 2026 • 09:44 AM
          </span>
        </div>

        <h2 className="hero-welcome-title">
          Good morning, Jhony Soda! <span className="wave-hand">👋</span>
        </h2>
        <p className="hero-welcome-desc">
          Your POS terminal is running smoothly. Daily sales are up <strong className="text-highlight">+14.2%</strong> compared to last week.
        </p>

        <div className="hero-action-row">
          <button className="btn-primary-action">
            <PlusCircle size={16} />
            <span>Quick Terminal Sale</span>
          </button>
          <button className="btn-secondary-action">
            <PackagePlus size={16} />
            <span>Add Inventory</span>
          </button>
          <button className="btn-secondary-action">
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Right Circular Goal Ring */}
      <div className="hero-goal-widget">
        <div className="goal-ring-container">
          <svg viewBox="0 0 100 100" className="goal-svg">
            <circle cx="50" cy="50" r="42" className="ring-bg" />
            <circle
              cx="50"
              cy="50"
              r="42"
              className="ring-progress"
              strokeDasharray="264"
              strokeDashoffset="47"
            />
          </svg>
          <div className="goal-ring-text">
            <span className="goal-percent">82%</span>
            <span className="goal-label">Target</span>
          </div>
        </div>

        <div className="goal-info">
          <div className="goal-title-row">
            <Target size={14} className="goal-icon" />
            <span className="goal-heading">Daily Revenue Goal</span>
          </div>
          <h3 className="goal-amount">$24,600 / $30,000</h3>
          <div className="streak-badge">
            <Flame size={12} />
            <span>7 Day Streak</span>
          </div>
        </div>
      </div>
    </div>
  );
}
