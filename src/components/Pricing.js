import React from "react";
import "../styles/pricing.css";
import "../styles/switch-toggle.css";

export default function Pricing() {
  return (
    <div class="pricing">
      <div class="pricing-header">
        <h1>Our Pricing</h1>
        <div class="toggle">
          <h4>Annually</h4>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>

          <h4>Monthly</h4>
        </div>
      </div>
      {/* Pricing cards */}
      <div class="pricing-cards">
        <div class="pricing-card">
          <ul class="price-list price-list-secondary">
            <li class="price-list-header price-list-header-secondary">Basic</li>
            <li class="price monthly-price">$19.99</li>
            <li class="price yearly-price">$199.99</li>
            <li class="feature">500 GB Storage</li>
            <li class="feature">2 Users Allowed</li>
            <li class="feature">Send up to 3 GB</li>
            <li>
              <button class="price-button">LEARN MORE</button>
            </li>
          </ul>
        </div>

        <div class="pricing-card featured">
          <ul class="price-list price-list-main">
            <li class="price-list-header price-list-header-main">
              Professional
            </li>
            <li class="price monthly-price">$24.99</li>
            <li class="price yearly-price">$249.99</li>
            <li class="feature">1 TB Storage</li>
            <li class="feature">5 Users Allowed</li>
            <li class="feature">Send up to 10 GB</li>
            <li>
              <button class="price-button price-button-main">LEARN MORE</button>
            </li>
          </ul>
        </div>
        <div class="pricing-card">
          <ul class="price-list price-list-secondary">
            <li class="price-list-header price-list-header-secondary">
              Master
            </li>
            <li class="price monthly-price">$39.99</li>
            <li class="price yearly-price">$399.99</li>
            <li class="feature">2 TB Storage</li>
            <li class="feature">10 Users Allowed</li>
            <li class="feature">Send up to 20 GB</li>
            <li>
              <button class="price-button">LEARN MORE</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
