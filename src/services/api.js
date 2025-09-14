// src/services/api.js
import axios from "axios";

// Base API URL from .env or fallback
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";

// Tenant ID from .env or fallback
const TENANT_ID =
  process.env.REACT_APP_TENANT_ID || "3f8ee056-cfc4-4f94-8a94-9c556d4ca881"; // replace with your actual tenantId

// Fetch overview metrics: total customers, total orders, revenue, top customers
export async function fetchOverview() {
  try {
    const res = await axios.get(`${API_BASE}/stats/${TENANT_ID}/overview`);
    return res.data;
  } catch (err) {
    console.error("Error fetching overview:", err);
    return null;
  }
}

// Fetch all orders for this tenant
export async function fetchOrders() {
  try {
    const res = await axios.get(`${API_BASE}/orders?tenantId=${TENANT_ID}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching orders:", err);
    return [];
  }
}

// Optional: fetch all customers
export async function fetchCustomers() {
  try {
    const res = await axios.get(
      `${API_BASE}/stats/customers?tenantId=${TENANT_ID}`
    );
    return res.data;
  } catch (err) {
    console.error("Error fetching customers:", err);
    return [];
  }
}
