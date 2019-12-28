import React, { useState, Component } from 'react'
import "./EventView.css"

export default class EventCard extends Component {

  render() {
    /*
    const [width, setWidth] = useState(320);
    window.addEventListener("resize", (w, e) => {
      let frameWidth = document.getElementById("scrollableEventCollectionView").offsetWidth
      let objectWidth = document.getElementsByClassName("card")[0].offsetWidth
    });
    */

    // TODO: Layout the event card view

    return (
      <div className="card"/* style={{width: width + "px"}}*/>
        <div className="imageContainer">
          <img className="eventCoverImage" alt="" />
        </div>
        <h4>{this.props.eventInfo["Title"]}</h4>
        <p className="datetime">{this.props.eventInfo["Start time"]}</p>
        {/* <p className="centerText">{0}</p> */}
      </div>
    )
  }
    
}
