'use client';

import React from 'react';
import { Star, Cpu, Laptop, Printer, ShoppingCart } from 'lucide-react';
import './RightSidebarWidgets.css';

export default function ProductShowcase() {
  const products = [
    {
      name: 'Rhinotomy Machine x250',
      category: 'Medical',
      rating: '4.9',
      sales: '142 sold ($142k)',
      stock: 14,
      stockMax: 50,
      icon: Cpu,
      iconBg: '#6366f1'
    },
    {
      name: 'Laptop Asus x249 Pro',
      category: 'Electronics',
      rating: '4.8',
      sales: '88 sold ($88k)',
      stock: 6,
      stockMax: 30,
      icon: Laptop,
      iconBg: '#10b981'
    },
    {
      name: 'POS Thermal Printer P80',
      category: 'Hardware',
      rating: '4.7',
      sales: '210 sold ($21k)',
      stock: 28,
      stockMax: 40,
      icon: Printer,
      iconBg: '#06b6d4'
    }
  ];

  return (
    <div className="nextgen-card widget-card">
      <div className="widget-card-header">
        <h3 className="widget-card-title">Top Performing Items</h3>
        <span className="pill-chip chip-indigo">Best Sellers</span>
      </div>

      <div className="product-showcase-list">
        {products.map((item, idx) => {
          const IconComp = item.icon;
          const stockPercent = Math.round((item.stock / item.stockMax) * 100);
          return (
            <div key={idx} className="showcase-item">
              <div className="showcase-icon-box" style={{ backgroundColor: item.iconBg }}>
                <IconComp size={18} className="showcase-icon" />
              </div>

              <div className="showcase-info">
                <div className="showcase-title-row">
                  <span className="showcase-name">{item.name}</span>
                  <div className="rating-badge">
                    <Star size={10} fill="#f59e0b" color="#f59e0b" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <span className="showcase-sales">{item.sales}</span>

                <div className="showcase-stock-meter">
                  <div className="meter-bg">
                    <div
                      className="meter-fill"
                      style={{
                        width: `${stockPercent}%`,
                        backgroundColor: stockPercent < 30 ? '#f43f5e' : '#10b981'
                      }}
                    ></div>
                  </div>
                  <span className="meter-text">{item.stock} in stock</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
