import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Feedback from "./components/Feedback/Feedback.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Feedback />
    <App />
  </StrictMode>
);
