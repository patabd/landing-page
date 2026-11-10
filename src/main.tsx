import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/anek-bangla";
import "@fontsource-variable/jetbrains-mono";
import "./index.css";
import App from "./App";
import { I18nProvider } from "./i18n/I18nProvider";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </I18nProvider>
  </StrictMode>
);
