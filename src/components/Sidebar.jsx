'use client';

import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Receipt,
  Package,
  Grid,
  Tag,
  Scale,
  DollarSign,
  ShoppingBag,
  Truck,
  FileText,
  BarChart3,
  UserCheck,
  X,
  Menu
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ activeTab, setActiveTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainNavItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Cashier', icon: ShoppingCart, badge: '12' },
    { name: 'Transaction', icon: FileText },
    { name: 'Master Item', icon: Package },
    { name: 'Category', icon: Grid },
    { name: 'Brand', icon: Tag },
    { name: 'Units', icon: Scale },
    { name: 'Master Price', icon: DollarSign },
    { name: 'Purchase Order', icon: ShoppingBag, badge: '3' },
    { name: 'Supplier', icon: Truck },
    { name: 'Receipt', icon: Receipt },
    { name: 'Report', icon: BarChart3 },
    { name: 'User Manager', icon: UserCheck },
  ];

  const inventoryNavItems = [
    { name: 'Master Item', icon: Package },
    { name: 'Category', icon: Grid },
    { name: 'Brand', icon: Tag },
    { name: 'Units', icon: Scale },
  ];

  const handleNavClick = (tab) => {
    setActiveTab && setActiveTab(tab);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        className="hamburger-btn"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-brand">
          <div className="brand-logo-seal">
            <svg viewBox="0 0 40 40" className="brand-logo-svg" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#b91c1c" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="url(#logoGrad)" />
              <circle cx="20" cy="20" r="14" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.9" />
              <path d="M20 10V30M10 20H30" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="20" cy="20" r="4" fill="#ffffff" />
            </svg>
          </div>
          <div className="brand-text-container">
            <h2 className="brand-title">COLEGIO DE SANTA RITA</h2>
            <span className="brand-subtitle">POS & Enterprise Suite</span>
          </div>
          {/* Close button — mobile only */}
          <button
            className="sidebar-close-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Menu List */}
        <div className="sidebar-menu">
          <div className="menu-group-label">MAIN NAVIGATION</div>
          <ul className="nav-list">
            {mainNavItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <li key={`main-${idx}`}>
                  <button
                    className={`sidebar-nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.name)}
                  >
                    <Icon size={16} className="nav-icon" />
                    <span className="nav-text">{item.name}</span>
                    {item.badge && <span className="nav-badge">{item.badge}</span>}
                    {isActive && <span className="active-indicator-glow"></span>}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="menu-group-label">INVENTORY</div>
          <ul className="nav-list">
            {inventoryNavItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === `inv-${item.name}`;
              return (
                <li key={`inv-${idx}`}>
                  <button
                    className={`sidebar-nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(`inv-${item.name}`)}
                  >
                    <Icon size={16} className="nav-icon" />
                    <span className="nav-text">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
