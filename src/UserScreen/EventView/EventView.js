import React, { Component } from 'react'
import "./EventView.css"
import EventCard from './EventCard'
import axios from 'axios';
import moment from 'moment';

export default class EventView extends Component {

  constructor(props) {
    super(props);

    let lowerBound = moment().format("YYYY-MM-DD hh:mm:ss");
    lowerBound = "2019-12-01 00:00:00";

    axios.get(process.env.REACT_APP_API_URL + 'events/List?lowerBound=' + encodeURI(lowerBound))
      .then( (response) => {
        console.log(`Loaded ${response.data.length} events`)
        this.setState({
          loaded: true,
          lastUpdated: new Date(),
          events: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })

    this.state = {
      loaded: false,
      lastUpdated: new Date(),
      events: {}
    }
  }

  render() {

    let eventCards = [];

    for (let i = 0; i < this.state.events.length; i++) {
      eventCards.push(<EventCard eventInfo={this.state.events[i]} />);
    }

    if (this.state.loaded && eventCards.length > 0) {
      return (
        <div className="collectionView">
          <div id="scrollableEventCollectionView">
          {eventCards}
        </div>
      </div>
      );
    } else if (this.state.loaded) {
      return (<div className="collectionView">
        <div id="scrollableEventCollectionView">
          <p className="nothing">No events.</p>
        </div>
      </div>)
    } else {
      return (
        <div className="collectionView">
          <div id="scrollableEventCollectionView">
            <p className="nothing">Loading...</p>
          </div>
        </div>
      );
    }
  }
}
