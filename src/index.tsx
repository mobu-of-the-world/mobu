import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";

import "ress";
import "./index.css";
import { assertIsDefined } from "./utils/typeguard";

const root = document.getElementById("root");
assertIsDefined<typeof root>(root);
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
