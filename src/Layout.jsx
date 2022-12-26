import React from "react";
import Navmain from "./components/Navmain";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
function Layout({ setSearch, setRating }) {
  return (
    <div>
      <Navmain setRating={setRating} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
