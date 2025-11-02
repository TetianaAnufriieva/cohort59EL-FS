// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/themeContext/ThemeProvider.tsx";
import ContactForm from "./components/ContactForm/ContactForm.tsx";
import SecurityCheckForm from "./components/SecurityCheckForm/SecurityCheckForm.tsx";
// import Feedback from "./components/Feedback/Feedback.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <Feedback />
  //   <App />
  // </StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
