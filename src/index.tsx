import { createRoot } from "react-dom/client";
import AppContainer from "./pages/AppContainer";

import "ress";
import "./index.css";

createRoot(document.getElementById("root")!).render(<AppContainer />);
