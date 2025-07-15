import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import WhyDidYouRender from "@welldone-software/why-did-you-render";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

WhyDidYouRender(React, { trackAllPureComponents: true });

root.render(<App />);
