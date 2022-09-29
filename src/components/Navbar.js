import React, { useState } from "react";
import '../styles/navbar.css';
import Card from "./Card";

const Navbar = () => {
  const[fav,setFav] =useState(0);
  return (
    <nav>
      <div className="nav_box">
        <span className="quote_land">
          QuoteLand
        </span>
        <div className="fav">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/like--v2.png"/>
        <span>{fav}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;