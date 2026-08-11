'use client';

import React, { useState } from 'react';
import { Bell, CheckCircle2, ChevronDown } from 'lucide-react';
import DashboardTabs from './DashboardTabs';
import './Header.css';

export default function Header() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const mockNotifications = [
    { title: 'New Order Received', time: '2m ago', desc: 'Order #POS-8842 processed successfully' },
    { title: 'Low Stock Alert', time: '15m ago', desc: 'Laptop Asus x249 is down to 14 units' },
    { title: 'Shift Report Ready', time: '1h ago', desc: 'Morning shift batch summary generated' },
  ];

  return (
    <header className="app-header">
      <div className="header-right">
        {/* Dashboard Tabs */}
        <DashboardTabs />
        {/* Notification Bell */}
        <div className="notification-dropdown-container">
          <button
            className={`header-icon-btn ${notificationsOpen ? 'active' : ''}`}
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <Bell size={18} />
            <span className="notification-ping"></span>
          </button>

          {notificationsOpen && (
            <div className="notification-popover">
              <div className="popover-header">
                <span className="popover-title">Notifications</span>
                <span className="badge-pill badge-pill-success">3 New</span>
              </div>
              <div className="popover-body">
                {mockNotifications.map((n, i) => (
                  <div key={i} className="notification-item">
                    <CheckCircle2 size={15} className="notif-check-icon" />
                    <div className="notif-content">
                      <div className="notif-title-row">
                        <span className="notif-item-title">{n.title}</span>
                        <span className="notif-item-time">{n.time}</span>
                      </div>
                      <p className="notif-item-desc">{n.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="user-profile-pill">
          <div className="profile-avatar">JS</div>
          <div className="profile-info">
            <span className="profile-name">Jhony Soda</span>
            <span className="profile-role">Administrator</span>
          </div>
          <ChevronDown size={14} className="profile-chevron" />
        </div>
      </div>
    </header>
  );
}
