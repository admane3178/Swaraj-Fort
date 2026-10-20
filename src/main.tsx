import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./i18n"; // initialize i18n
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ErrorBoundary>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </HelmetProvider>
);
