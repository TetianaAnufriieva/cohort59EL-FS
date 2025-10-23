// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import Feedback from "./components/Feedback/Feedback.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <Feedback />
  //   <App />
  // </StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
