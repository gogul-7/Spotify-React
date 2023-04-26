import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setShow(true) : setShow(false);
    });
  });

  console.log(show);
  return (
    <div className={`uppernavBody ${show && "uppernavScroll"}`}>
      <div className="bodyItems">
        <p className="signUp">Sign Up</p>
        <button className="loginBtn">Log In</button>
      </div>
    </div>
  );
}

export default Navbar;
