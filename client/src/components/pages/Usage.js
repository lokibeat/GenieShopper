import React from "react";
import "./Usage.css";
import { Layout } from "../Layout";
import OutlinedTextFields from "./NumberButton";

const Usage = props => (
  <Layout>
    <div class="usage">
      <h4>Usage</h4>
      <h5>Select your monthly usage</h5>
      <ul className="list">
        <div className="container">
          <li>
            <span>Month 1</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 2</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 3</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 4</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 5</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 6</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 7</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 8</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 9</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 10</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 11</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
          <li>
            <span>Month 12</span>
            <span className="number">
              <OutlinedTextFields />
            </span>
          </li>
        </div>
      </ul>
    </div>
  </Layout>
);

export default Usage;
