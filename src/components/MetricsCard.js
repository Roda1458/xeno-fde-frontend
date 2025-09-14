// src/components/MetricsCard.js
import React from "react";

export default function MetricsCard({ title, value, subtitle }) {
  return (
    <div
      style={{
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        background: "#fff",
        minWidth: 180,
        margin: 8,
      }}
    >
      <div style={{ fontSize: 12, color: "#666" }}>{title}</div>
      <div style={{ fontSize: 24, fontWeight: 700, marginTop: 8 }}>{value}</div>
      {subtitle && (
        <div style={{ fontSize: 12, color: "#999", marginTop: 6 }}>
          {subtitle}
        </div>
      )}
    </div>
  );
}
