'use client';

import React from 'react';
import { AlertOctagon, RefreshCw, ShoppingCart } from 'lucide-react';
import './RightSidebarWidgets.css';

export default function LowStockAlerts() {
  const alerts = [
    {
      name: 'Laptop Asus x249 Pro',
      sku: 'SKU-8842',
      remaining: '6 units left',
      urgency: 'Critical',
      chipClass: 'chip-rose'
    },
    {
      name: 'Barcode Scanner S10',
      sku: 'SKU-3321',
      remaining: '3 units left',
      urgency: 'Critical',
      chipClass: 'chip-rose'
    },
    {
      name: 'Thermal Receipt Paper 80mm',
      sku: 'SKU-1092',
      remaining: '12 rolls left',
      urgency: 'Warning',
      chipClass: 'chip-amber'
    }
  ];

  return (
    <div className="nextgen-card widget-card">
      <div className="widget-card-header">
        <div className="alert-header-left">
          <AlertOctagon size={16} className="text-rose" />
          <h3 className="widget-card-title">Inventory Low Stock Alerts</h3>
        </div>
        <span className="pill-chip chip-rose">3 Action Needed</span>
      </div>

      <div className="alert-item-list">
        {alerts.map((alert, idx) => (
          <div key={idx} className="alert-row-item">
            <div className="alert-item-info">
              <span className="alert-item-name">{alert.name}</span>
              <div className="alert-meta-row">
                <span className="alert-sku">{alert.sku}</span>
                <span className={`pill-chip ${alert.chipClass}`}>{alert.remaining}</span>
              </div>
            </div>

            <button className="restock-btn">
              <ShoppingCart size={13} />
              <span>Restock</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
