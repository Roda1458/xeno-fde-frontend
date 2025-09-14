// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { fetchOverview, fetchOrders } from "../services/api";
import MetricsCard from "../components/MetricsCard";
import TopCustomers from "../components/TopCustomers";
import RecentOrders from "../components/RecentOrders";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [overview, setOverview] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const ov = await fetchOverview();
        setOverview(ov);
      } catch (err) {
        console.error(err);
      }
      // optional fetch raw orders if endpoint exists
      try {
        const ord = await fetchOrders();
        // ord expected: [{id, order_number, total_price, processed_at, ...}, ...]
        setOrders(ord.slice(0, 10));
      } catch (e) {
        // endpoint may not exist; ignore
        // console.warn('orders fetch failed', e.message);
      }
    })();
  }, []);

  // Build sample orders-by-date if raw orders available, else empty
  const ordersByDate = orders.length
    ? Object.values(
        orders.reduce((acc, o) => {
          const d = o.processed_at
            ? new Date(o.processed_at).toLocaleDateString()
            : "Unknown";
          if (!acc[d]) acc[d] = { date: d, total: 0, count: 0 };
          acc[d].total += Number(o.total_price || 0);
          acc[d].count += 1;
          return acc;
        }, {})
      )
    : [];

  return (
    <div style={{ padding: 24, background: "#f2f4f8", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: 8 }}>Dashboard</h1>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <MetricsCard
          title="Customers"
          value={overview ? overview.totalCustomers : "—"}
          subtitle="Total customers"
        />
        <MetricsCard
          title="Orders"
          value={overview ? overview.totalOrders : "—"}
          subtitle="Total orders"
        />
        <MetricsCard
          title="Revenue"
          value={overview ? `₹${(overview.revenue || 0).toFixed(2)}` : "—"}
          subtitle="Total revenue"
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12 }}>
        <div>
          <div style={{ padding: 12, background: "#fff", borderRadius: 8 }}>
            <h3 style={{ marginTop: 0 }}>Orders by Date</h3>
            {ordersByDate.length ? (
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={ordersByDate}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="total" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ color: "#666" }}>
                No orders data available for chart (optional server endpoint
                needed)
              </div>
            )}
          </div>

          <div style={{ height: 12 }} />

          <RecentOrders orders={orders} />
        </div>

        <div>
          <TopCustomers customers={overview ? overview.topCustomers : []} />
        </div>
      </div>
    </div>
  );
}
