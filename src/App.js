import React from "react";
import AddColor from "./Components/colors";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Home";
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import BookComponent from "./Components/Books/bookComp";


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colorbox" element={<AddColor />} />
        <Route path="/books" element={<BookComponent />} />
        <Route path="/addbook" element={<AddColor />} />
      </Routes>
    </div>
  );
}

export default App

