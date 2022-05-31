import React from "react";
import { createRoot } from "react-dom/client";
import AppContainer from "./pages/AppContainer";

import "ress";
import "./index.css";
import { assertIsDefined } from "./utils/typeguard";

const root = document.getElementById("root");
assertIsDefined<typeof root>(root);
createRoot(root).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
