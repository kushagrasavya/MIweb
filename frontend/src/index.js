import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import ReactGA from "react-ga4";

// Initialize Google Analytics with your Measurement ID
ReactGA.initialize("G-CFHCVS6TJV");

// Send the initial pageview as soon as the app loads
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);