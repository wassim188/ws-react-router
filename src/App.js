import React, { useState } from "react";
import "./App.css";
import Navmain from "./components/Navmain";
import WaykList from "./components/WayList";
import { data } from "./data";
import {Routes,Route} from "react-router-dom"
import ErrorPage from "./components/ErrorPage"
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import WatchPage from "./components/WatchPage";
function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [movie, setMovie] = useState(data);
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path="home" element={<HomePage />}/>
      <Route path="Movie"
            element={<WaykList
              setMovie={setMovie}
              rating={rating}
              data={movie}
              search={search}
            />}
            />
            <Route path="product/:id" element={<WatchPage/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/>} />
    </Routes>     
    
  );
}

export default App;
