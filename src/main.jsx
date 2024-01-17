import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import App from "./App.jsx";
import { ThemeProvider } from "./components/utils/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
