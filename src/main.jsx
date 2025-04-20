import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HeroUIProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </HeroUIProvider>
  </BrowserRouter>
);
