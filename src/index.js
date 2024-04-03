import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import HomePage from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import "../src/utils/i18n/i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Layout from "./screens/Layout";
import { LanguageProvider } from "./contexts/LanguageContext";

const router = createBrowserRouter([
  {
    path: "/patissier",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    )
  },
  {
    path: "/products",
    element: (
      <Layout>
        <ProductPage />
      </Layout>
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <RouterProvider router={router} />
  </LanguageProvider>
);

reportWebVitals();
