import React, { Component } from 'react'
import './EventDetailPage.css'
import axios from 'axios'

export default class EventDetailPage extends Component {
  
  constructor(props) {
    super(props);

    document.title = "Event Details"
    this.state = {
      loaded: false,
      eventInfo: {}
    }

    axios.get(
      process.env.REACT_APP_API_URL + 'events/GetEventByIndex' + window.location.search,
      { headers: {"Authorization": process.env.REACT_APP_AUTH_TOKEN } }
    )
    .then( (response) => {
      console.log(response.data)
      this.setState({
        loaded: true,
        eventInfo: response.data
      })
    })
    .catch( (error) => {
      console.log(error)
    })
  }

  render() {

    if (this.state.loaded) {
      return (
        <div className="eventDetailPage">
          <p className="placeholderText">{this.state.eventInfo.Title}</p>
        </div>
      )
    } else {
      return (
        <div className="eventDetailPage">
          <p className="placeholderText">Loading event info...</p>
        </div>
      )
    }
  }
}
