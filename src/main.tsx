import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// import "jquery";
// import "popper.js";
// import "bootstrap/dist/js/bootstrap.min.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
