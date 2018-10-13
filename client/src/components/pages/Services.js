import React from "react";
import "./Services.css";
import { Layout } from "../Layout";
import ButtonBases from "./ButtonBases.js";

const Services = () => (
  <Layout>
    <div class="services">
      <h1>Our Services</h1>
      <h2>Select your type of premise</h2>
      <div>
        <ButtonBases />
      </div>
    </div>
  </Layout>
);

export default Services;
