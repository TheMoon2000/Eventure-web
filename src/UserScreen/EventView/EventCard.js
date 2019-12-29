import moment from 'moment'
import React, { Component } from 'react'
import "./EventView.css"

export default class EventCard extends Component {

  redirect(info) {
    console.log(info)
  }

  render() {
    /*
    const [width, setWidth] = useState(320);
    window.addEventListener("resize", (w, e) => {
      let frameWidth = document.getElementById("scrollableEventCollectionView").offsetWidth
      let objectWidth = document.getElementsByClassName("card")[0].offsetWidth
    });
    */

    // Date format reference: https://devhints.io/moment

    let startDate = moment(this.props.eventInfo['Start time'], 'YYYY-MM-DD hh:mm:ss')
    if (startDate.getFullYear !== new Date().getFullYear) {
      var formatted = startDate.format('ddd, MMM D, YYYY @ h:mm A');
    } else {
      var formatted = startDate.format('ddd, MMM D @ h:mm A');
    }

    return (
      <div className="card" onClick={this.redirect}>
        <div className="imageContainer">
          <img className="eventCoverImage" alt="" />
        </div>
        <h4>{this.props.eventInfo["Title"]}</h4>
        <p className="datetime">{formatted}</p>

        <div className="separator" />
        
        <div className="detailRegion">
          <div className="detailItem">
            <h6>Where:</h6>
            <p>{this.props.eventInfo["Location"]}</p>
          </div>
          <div className="detailItem">
            <h6>Hosted by:</h6>
            <p style={{marginLeft: "84px"}}>{this.props.eventInfo["Organization title"]}</p>
          </div>
        </div>
      </div>
    )
  }
    
}
