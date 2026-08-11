'use client';

import React from 'react';
import './BottomCards.css';

export default function LatestTransactions() {
  const transactions = [
    {
      id: 'T21.0331',
      timestamp: 'Today - 12:45',
      amount: '$50,000',
      status: 'Succeed',
    },
    {
      id: 'T21.0331',
      timestamp: 'Today - 12:31',
      amount: '$150,000',
      status: 'Succeed',
    },
  ];

  return (
    <div className="dashboard-card bottom-card">
      <div className="bottom-card-header">
        <h3 className="card-heading">Latest Transaction</h3>
      </div>

      <div className="table-container">
        <table className="bottom-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Timestamp</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx}>
                <td className="cell-id">{tx.id}</td>
                <td className="cell-muted">{tx.timestamp}</td>
                <td className="cell-id">{tx.amount}</td>
                <td>
                  <span className="status-badge status-succeed">{tx.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
