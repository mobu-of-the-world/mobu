import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";
import { assertIsDefined } from "./common/typeguard";

const root = document.getElementById("root");
assertIsDefined<typeof root>(root);
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
