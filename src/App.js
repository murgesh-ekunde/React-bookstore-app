import React from "react";
import AddColor from "./Components/colors";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Home";
import bookList from "./Components/Books/bookList";
import Addbooks from "./Components/Books/Addbooks"
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import BookComponent from "./Components/Books/bookComp";
import { useState } from "react";


function App() {
  const [newBookList, setNewBookList] = useState(bookList)

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colorbox" element={<AddColor />} />
        <Route path="/books" element={<BookComponent newBookList={newBookList} setNewBookList={setNewBookList} />} />
        <Route path="/addbook" element={<Addbooks newBookList={newBookList} setNewBookList={setNewBookList} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
}

export default App

