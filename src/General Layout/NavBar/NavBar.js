import React from 'react';
import "./NavBar.css";

export default function NavBar({ tabitem }) {

  function openNav() {
    // document.getElementById("sideMenu").style.display = "block"
    document.getElementById("sideMenu").style.backgroundColor = "rgba(70, 70, 70, 0.25)"
    document.getElementById("sideMenu").style.pointerEvents = "all"
    
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
      <div className="leftAlign">
        <div className="staticButtonContainer">
          <img className="logo" src="static/assets/logo_horizontal.png" width="136px" alt="eventure" />
        </div>
        <div className="staticButtonContainer">
          <div className="staticButtons">        
            <a href="/" className={tabitem === "home" ? "selected" : ""}>Home</a>
            <a href="/about" id="aboutButton" className={tabitem === "about" ? "selected" : ""}>About Us</a>
            <a href="/privacy" id="privacyButton" className={tabitem === "privacy" ? "selected" : ""}>Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="mobileNavBar">
        <div className="staticButtonContainer">
          <button className="menuButton" onClick={openNav}><img src="static/assets/menu.svg" width="20px" alt="menu"/></button>
        </div>
        <div className="staticButtonContainer">
          <img className="logo" src="static/assets/eventure.jpg" width="38px" alt="eventure" />
        </div>
        <div className="staticButtonContainer">
          <div className="staticButtons"> 
            <a href="/" className={tabitem === "home" ? "selected" : ""}>Home</a>
          </div>
        </div>
      </div>
      
      <div className="rightAlign">
        <a href="/login" className={tabitem === "login" ? "selected" : ""}>Login</a>
      </div>
    </div>
  )
}
