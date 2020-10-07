import React from "react";
import "./App.css";
import Pricing from "./components/Pricing.js";

function App() {
  return (
    <div className="App background">
      <header></header>
      <body>
        <Pricing />
      </body>
      {/* <footer>
        <div class="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="www.cartes.dev">Alfonso Carte</a>.
        </div>
      </footer> */}
    </div>
  );
}

export default App;
