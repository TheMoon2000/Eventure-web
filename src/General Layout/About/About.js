import React from 'react'
import './About.css'

export default function About() {
  document.title = "Privacy Policy"
  return (
    <div className="about">
      <div className="logoView">
        <img src="static/assets/logo.jpg" width="150px" alt="logo" />
      </div>
      <h1 align="center">Eventure</h1>
      <p className="aboutText">Eventure is a mobile app developed by a group of students from UC Berkeley (Calpha Dev) as a platform dedicated to college students for on-campus event exploration and promotion. </p>
      <a href="https://apps.apple.com/app/id1478542362">
        <img src="/static/assets/DownloadButtonBlack.svg" alt="Download" class="appstoreButton" />
      </a>
    </div>
  )
}
