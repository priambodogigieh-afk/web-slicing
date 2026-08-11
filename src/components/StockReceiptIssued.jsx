'use client';

import React from 'react';
import './BottomCards.css';

export default function StockReceiptIssued() {
  const logs = [
    {
      timestamp: 'Today - 12:45',
      name: 'Rhinotomy machine x250',
      event: 'In',
      swatchColor: '#ef4444',
    },
    {
      timestamp: 'Today - 12:45',
      name: 'Asus X541U',
      event: 'Out',
      swatchColor: '#8b5cf6',
    },
  ];

  return (
    <div className="dashboard-card bottom-card">
      <div className="bottom-card-header">
        <h3 className="card-heading">Stock Receipt / Issued</h3>
      </div>

      <div className="table-container">
        <table className="bottom-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Item Name</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr key={idx}>
                <td className="cell-muted">{log.timestamp}</td>
                <td>
                  <div className="item-name-cell">
                    <span className="item-swatch" style={{ backgroundColor: log.swatchColor }}></span>
                    <span className="cell-text">{log.name}</span>
                  </div>
                </td>
                <td>
                  <span className={`event-badge ${log.event === 'In' ? 'event-in' : 'event-out'}`}>
                    {log.event}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
