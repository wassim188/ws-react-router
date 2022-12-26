import React, { useState } from "react";
import "./App.css";
import WayList from "./components/WayList";
import { data } from "./data";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import WatchPage from "./components/WatchPage";
function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [movie, setMovie] = useState(data);
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout setRating={setRating} setSearch={setSearch} />}
      >
        <Route index element={<HomePage />} />
        <Route
          path="Movie"
          element={
            <WayList
              setMovie={setMovie}
              rating={rating}
              data={movie}
              search={search}
            />
          }
        />
        <Route path="product/:id" element={<WatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
