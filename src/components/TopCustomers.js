// src/components/TopCustomers.js
import React from "react";

export default function TopCustomers({ customers }) {
  return (
    <div
      style={{
        padding: 12,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      <h3 style={{ margin: "0 0 12px 0" }}>Top Customers</h3>
      {customers && customers.length ? (
        <ol style={{ paddingLeft: 18 }}>
          {customers.map((c, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <strong>{c.customer_id || "Unknown"}</strong> — ₹
              {(c.total_spent || 0).toFixed(2)}
            </li>
          ))}
        </ol>
      ) : (
        <div style={{ color: "#666" }}>No customers yet</div>
      )}
    </div>
  );
}
