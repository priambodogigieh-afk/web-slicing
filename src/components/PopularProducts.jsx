'use client';

import React from 'react';
import './BottomCards.css';

export default function PopularProducts() {
  const products = [
    {
      id: 'PZ.31547',
      name: 'Rhinotomy machine x250',
      stock: 14,
      swatchColor: '#ef4444',
    },
    {
      id: 'PZ.31721',
      name: 'Laptop Asus x249',
      stock: 14,
      swatchColor: '#8b5cf6',
    },
  ];

  return (
    <div className="dashboard-card bottom-card">
      <div className="bottom-card-header">
        <h3 className="card-heading">Popular Product</h3>
      </div>

      <div className="table-container">
        <table className="bottom-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Item Name</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr key={idx}>
                <td className="cell-id">{item.id}</td>
                <td>
                  <div className="item-name-cell">
                    <span className="item-swatch" style={{ backgroundColor: item.swatchColor }}></span>
                    <span className="cell-text">{item.name}</span>
                  </div>
                </td>
                <td className="cell-id">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
