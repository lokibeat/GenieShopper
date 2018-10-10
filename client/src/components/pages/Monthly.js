import React from "react";
import "./Monthly.css";
import { Layout } from "../Layout";
import Chart from "../Chart/chart";
const Monthly = () => (
  <Layout>
    <div class="monthly">
      <h1>Monthly</h1>
      <Chart />
    </div>
  </Layout>
);
export default Monthly;
