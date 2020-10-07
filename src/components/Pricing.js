import React from "react";

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
      <div class="pricing-cards">
        <div class="pricing-card-secondary">
          <ul class="price-list">
            <li class="price-list-header">Basic</li>
            <li class="monthly-price">$19.99</li>
            <li class="yearly-price">$199.99</li>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
            <li>
              <button>Learn More</button>
            </li>
          </ul>
        </div>
        <div class="pricing-card-main">
          <ul class="price-list">
            <li class="price-list-header">Professional</li>
            <li class="monthly-price">$24.99</li>
            <li class="yearly-price">$249.99</li>
            <li>1 TB Storage</li>
            <li>5 Users Allowed</li>
            <li>Send up to 10 GB</li>
            <li>
              <button>Learn More</button>
            </li>
          </ul>
        </div>
        <div class="pricing-card-secondary">
          <ul class="price-list">
            <li class="price-list-header">Master</li>
            <li class="monthly-price">$39.99</li>
            <li class="yearly-price">$399.99</li>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
            <li>
              <button>Learn More</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
