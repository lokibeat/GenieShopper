import React from "react";
import "./Services.css";
import { Layout } from "../Layout";
import ButtonBases from "./ButtonBases.js";

const Services = () => (
  <Layout>
    <div class="services">
      <h1>Get Started</h1>
      <h2>Select your type of premise to see example usage or to enter your usage.</h2>
      <div>
        <ButtonBases />
      </div>
    </div>
  </Layout>
);

export default Services;
