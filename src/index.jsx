import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "routes/routes";
import "styles/globalStyles.module.css";

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
