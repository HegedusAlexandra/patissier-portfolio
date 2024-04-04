import React, { memo } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-[100%] bg-red-400">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default memo(Layout);
