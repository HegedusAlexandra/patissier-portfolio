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
import { Sitemap } from "./utils/Enum";
const basename = process.env.REACT_APP_BASENAME || "";

const router = createBrowserRouter([
  {
    path: `/${Sitemap.HOME}`,
    element: (
      <Layout>
        <HomePage />
      </Layout>
    )
  },
  {
    path: `/${Sitemap.PRODUCTS}`,
    element: (
      <Layout>
        <ProductPage />
      </Layout>
    )
  }
],{ basename });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <RouterProvider router={router} />
  </LanguageProvider>
);

reportWebVitals();
