import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <body>
        <div>
          <div>Our Pricing</div>
          <div>
            <div>Annually</div>
            <div>_toggle_</div>
            <div>Monthly</div>
          </div>
        </div>
        {/* Pricing cards */}
        <div>
          <div>
            Basic $19.99 $199.99 500 GB Storage 2 Users Allowed Send up to 3 GB{" "}
            <button>Learn More</button>
          </div>
          {/* Main card */}
          <div>
            Professional $24.99 $249.99 1 TB Storage 5 Users Allowed Send up to
            10 GB <button>Learn More</button>
          </div>
          <div>
            Master $39.99 $399.99 2 TB Storage 10 Users Allowed Send up to 20 GB{" "}
            <button>Learn More</button>
          </div>
        </div>
      </body>
      <footer>
        <div class="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
