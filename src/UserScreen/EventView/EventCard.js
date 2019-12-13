import React, { useState } from 'react'
import "./EventView.css"

export default function EventCard() {

    const [width, setWidth] = useState(320);
    window.addEventListener("resize", (w, e) => {
      let frameWidth = document.getElementById("scrollableEventCollectionView").offsetWidth
      let objectWidth = document.getElementsByClassName("card")[0].offsetWidth
    });


    let arr = []

    for (let i = 0; i < 5; i++) {
      arr.push(
        <div className="card"/* style={{width: width + "px"}}*/>
          <p style={{textAlign: "center"}}>[Event]</p>
        </div>
      );
      
    }

    return (
      <div id="scrollableEventCollectionView">
        {arr}
      </div>
    )
}
