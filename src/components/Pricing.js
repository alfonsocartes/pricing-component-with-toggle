import React from "react";
import "../styles/pricing.css";

export default function Pricing() {
  return (
    <div>
      <div>
        <div className="Pricing-header">Our Pricing</div>
        <div>
          <div>Annually</div>
          <div>_toggle_</div>
          <div>Monthly</div>
        </div>
      </div>
      {/* Pricing cards */}
      <div>
        <div class="pricing-card">
          <ul class="price-list-secondary">
            <li class="price-list-header">Basic</li>
            <li class="price monthly-price">$19.99</li>
            <li class="price yearly-price">$199.99</li>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
            <li>
              <button class="price-button">LEARN MORE</button>
            </li>
          </ul>
        </div>
        <div class="pricing-card">
          <ul class="price-list-main">
            <li class="price-list-header">Professional</li>
            <li class="price monthly-price">$24.99</li>
            <li class="price yearly-price">$249.99</li>
            <li>1 TB Storage</li>
            <li>5 Users Allowed</li>
            <li>Send up to 10 GB</li>
            <li>
              <button class="price-button">LEARN MORE</button>
            </li>
          </ul>
        </div>
        <div class="pricing-card">
          <ul class="price-list-secondary">
            <li class="price-list-header">Master</li>
            <li class="price monthly-price">$39.99</li>
            <li class="price yearly-price">$399.99</li>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
            <li>
              <button class="price-button">LEARN MORE</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
