
import './index.css';
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { ErrorBoundary } from "./components/ErrorBoundary";
import "./i18n"; // initialize i18n
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ErrorBoundary>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  </HelmetProvider>
);
