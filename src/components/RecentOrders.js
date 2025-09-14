// src/components/RecentOrders.js
import React from "react";

export default function RecentOrders({ orders = [] }) {
  return (
    <div
      style={{
        padding: 12,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      <h3 style={{ margin: "0 0 12px 0" }}>Recent Orders</h3>
      {orders.length === 0 ? (
        <div style={{ color: "#666" }}>No orders yet</div>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
            <tr>
              <th>Order #</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td style={{ padding: "8px 6px" }}>{o.order_number}</td>
                <td style={{ padding: "8px 6px" }}>
                  {o.customer_name || `${o.customer_id || "Unknown"}`}
                </td>
                <td style={{ padding: "8px 6px" }}>
                  ₹{Number(o.total_price || 0).toFixed(2)}
                </td>
                <td style={{ padding: "8px 6px" }}>
                  {o.processed_at
                    ? new Date(o.processed_at).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
