import React from "react";
import Nav from "react-bootstrap/Nav";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.css"

function navbar() {
  return (
    <div className="nav-section">
      <nav >
        <ul className="navbar">
          <li >
            <Link to="/"> <AiFillHome />Home</Link>
          </li>

          <li >
            <Link to="/books">Books</Link>
          </li>

          <li>
            <Link to="/addbook">Add New Book</Link>
          </li>

          <li>
            <Link to="/colorbox">Test Color</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
