import React from 'react'
import "./SideMenu.css"

export default function SideMenu() {

  function dismiss() {
    document.getElementById("sidePanel").style.width = "0"
  }

  return (
    <div id="sidePanel">
      <div className="header">
        <button className="dismissButton" onClick={dismiss}><img src="static/assets/close.svg" width="30px" alt="close" /></button>
        <img id="sideMenuLogo" src="static/assets/eventure.jpg" width="32px" alt="logo"/>
      </div>
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/privacy">Privacy Policy</a>
    </div>
  )
}
