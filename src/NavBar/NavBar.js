import React from 'react';
import "./NavBar.css";
import $ from 'jquery';

export default function NavBar({ tabitem }) {

  function openNav() {
    let menu = document.getElementById("sidePanel")
    if (menu != null) {
      menu.style.width = "240px";
    } else {
      console.log("side panel is null!");
    }
  }

  if (tabitem === "") {
    tabitem = "home";
  }

  return (    

    <div className="navbar">
      <div className="desktopNavBar">
        <div className="leftAlign">
          <img className="logo" src="static/assets/eventure.jpg" alt="eventure" />
          <a href="/" className={tabitem === "home" ? "selected" : ""}>Home</a>
          <a href="/about" id="aboutButton" className={tabitem === "about" ? "selected" : ""}>About Us</a>
          <a href="/privacy" id="privacyButton" className={tabitem === "privacy" ? "selected" : ""}>Privacy Policy</a>
        </div>
      </div>
      <div class="mobileNavBar">
        <button className="menuButton" onClick={openNav}><img src="static/assets/menu.svg" width="20px" alt="menu"/></button>
        <img className="logo" src="static/assets/eventure.jpg" alt="eventure" />
        <a href="/" className={tabitem === "home" ? "selected" : ""}>Home</a>
      </div>
      
      <div className="rightAlign">
        <a href="#" className={tabitem === "login" ? "selected" : ""}>Login</a>
      </div>
    </div>
  )
}
