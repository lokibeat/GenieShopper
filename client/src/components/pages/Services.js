import React from "react";
import "./Services.css";
import { Layout } from "../Layout";
import ButtonBases from "./ButtonBases.js";
import withStyles from "./SubmitButton.js";

const Services = () => (
  <Layout>
    <div class="services">
      <h1>Our Services</h1>
      <h2>Select yor type of premise</h2>
      <div>
        <ButtonBases />
      </div>
    </div>
  </Layout>
);

export default Services;
