import React from 'react';
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src="static/assets/eventure.jpg" alt="eventure" width="36px" />
      <div className="leftAlign">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
      </div>
      <div className="rightAlign">
        <a href="/login">Login</a>
      </div>
    </div>
  )
}
