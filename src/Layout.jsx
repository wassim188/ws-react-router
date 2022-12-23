import React,{useState} from 'react'
import Navmain from './components/Navmain'
import {Outlet} from "react-router"
import WayList from './components/WayList';
import { data } from "./data";
import Footer from './components/Footer';
function Layout() {
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(0);
  return (
    <div>
      <Navmain setRating={setRating} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout