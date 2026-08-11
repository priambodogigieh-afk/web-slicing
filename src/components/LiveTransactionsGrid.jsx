'use client';

import React from 'react';
import { CreditCard, QrCode, Banknote, Printer, CheckCircle2 } from 'lucide-react';
import './LiveTransactionsGrid.css';

export default function LiveTransactionsGrid() {
  const transactions = [
    {
      id: 'TRX-94821',
      customer: 'Dr. Maria Santos',
      avatar: 'MS',
      avatarBg: '#6366f1',
      items: '3 Items (Rhinotomy machine x1 + accessories)',
      amount: '$150,000',
      time: '2 mins ago',
      method: 'QRIS',
      methodIcon: QrCode
    },
    {
      id: 'TRX-94820',
      customer: 'Tech Lab Corp',
      avatar: 'TL',
      avatarBg: '#10b981',
      items: '2 Items (Asus Laptop x249)',
      amount: '$50,000',
      time: '14 mins ago',
      method: 'Card',
      methodIcon: CreditCard
    },
    {
      id: 'TRX-94819',
      customer: 'Walk-in Customer',
      avatar: 'WC',
      avatarBg: '#f59e0b',
      items: '5 Items (POS Printer + Paper Rolls)',
      amount: '$12,400',
      time: '35 mins ago',
      method: 'Cash',
      methodIcon: Banknote
    }
  ];

  return (
    <div className="nextgen-card live-trx-card">
      <div className="trx-card-header">
        <div className="trx-header-left">
          <h3 className="trx-main-title">Live Terminal Order Stream</h3>
          <span className="pill-chip chip-emerald">Real-time Stream</span>
        </div>
        <button className="view-all-link">View All Transactions →</button>
      </div>

      <div className="trx-card-list">
        {transactions.map((trx, idx) => {
          const MethodIcon = trx.methodIcon;
          return (
            <div key={idx} className="trx-item-card">
              <div className="trx-item-avatar" style={{ backgroundColor: trx.avatarBg }}>
                {trx.avatar}
              </div>

              <div className="trx-item-info">
                <div className="trx-title-line">
                  <span className="trx-customer-name">{trx.customer}</span>
                  <span className="trx-id-tag">{trx.id}</span>
                </div>
                <span className="trx-items-desc">{trx.items}</span>
                <span className="trx-time-sub">{trx.time}</span>
              </div>

              <div className="trx-item-right">
                <div className="trx-amount-box">
                  <span className="trx-amount-text">{trx.amount}</span>
                  <div className="payment-chip">
                    <MethodIcon size={12} />
                    <span>{trx.method}</span>
                  </div>
                </div>

                <button className="print-receipt-btn" title="Print Receipt">
                  <Printer size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
