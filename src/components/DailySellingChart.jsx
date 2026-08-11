'use client';

import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import './DailySellingChart.css';

const chartData = [
  { time: '00:00', val: 120 },
  { time: '02:00', val: 190 },
  { time: '04:00', val: 160 },
  { time: '06:00', val: 240 },
  { time: '08:00', val: 380 },
  { time: '10:00', val: 450 },
  { time: '12:00', val: 480 },
  { time: '14:00', val: 550 },
  { time: '16:00', val: 490 },
  { time: '18:00', val: 390 },
  { time: '20:00', val: 290 },
  { time: '22:00', val: 180 },
];

export default function DailySellingChart() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const svgWidth = 900;
  const svgHeight = 220;
  const paddingLeft = 48;
  const paddingRight = 24;
  const paddingTop = 16;
  const paddingBottom = 32;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;
  const maxY = 650;

  const coords = chartData.map((pt, i) => {
    const x = paddingLeft + (i / (chartData.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (pt.val / maxY) * chartHeight;
    return { x, y, ...pt };
  });

  const getSplinePath = (pts) => {
    if (pts.length < 2) return '';
    let path = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? i : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }
    return path;
  };

  const linePath = getSplinePath(coords);
  const yTicks = [600, 450, 300, 150, 0];

  return (
    <div className="dashboard-card chart-card">
      <div className="chart-card-header">
        <h3 className="chart-main-title">Daily Selling Activity</h3>

        <div className="chart-header-right">
          <span className="legend-dot"></span>
          <span className="legend-value">$2,420.22</span>
          <button className="more-btn" aria-label="Options">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="chart-area">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="main-chart-svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Horizontal grid lines + Y labels */}
          {yTicks.map((val) => {
            const yPos = paddingTop + chartHeight - (val / maxY) * chartHeight;
            return (
              <g key={`y-${val}`}>
                <line
                  x1={paddingLeft}
                  y1={yPos}
                  x2={svgWidth - paddingRight}
                  y2={yPos}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <text
                  x={paddingLeft - 8}
                  y={yPos + 4}
                  fontSize="10"
                  fill="#94a3b8"
                  fontWeight="500"
                  textAnchor="end"
                  fontFamily="inherit"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* X Axis Labels */}
          {coords.map((pt, i) => (
            <text
              key={`x-${i}`}
              x={pt.x}
              y={svgHeight - 6}
              fontSize="10"
              fill="#94a3b8"
              fontWeight="500"
              textAnchor="middle"
              fontFamily="inherit"
            >
              {pt.time}
            </text>
          ))}

          {/* Area Fill */}
          <path
            d={`${linePath} L ${coords[coords.length - 1].x},${paddingTop + chartHeight} L ${coords[0].x},${paddingTop + chartHeight} Z`}
            fill="url(#areaGradient2)"
          />

          {/* Red Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {coords.map((pt, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <g key={`node-${idx}`}>
                {isHovered && (
                  <line
                    x1={pt.x}
                    y1={paddingTop}
                    x2={pt.x}
                    y2={paddingTop + chartHeight}
                    stroke="#ef4444"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                )}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 6 : 4}
                  fill="#ef4444"
                  stroke="#ffffff"
                  strokeWidth="2"
                  style={{ cursor: 'pointer', transition: 'r 0.15s ease' }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
                {isHovered && (
                  <g transform={`translate(${pt.x}, ${pt.y - 28})`}>
                    <rect x="-30" y="-14" width="60" height="22" rx="5" fill="#1e293b" />
                    <text x="0" y="2" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="inherit">
                      ${pt.val * 10}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
