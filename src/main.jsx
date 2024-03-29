import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext";

const theme = localStorage.getItem("theme");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider localTheme={theme}>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
);
