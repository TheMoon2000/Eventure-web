import React from 'react'
import "./EventView.css"
import EventCard from './EventCard'

export default function EventView() {
  return (
    <div className="collectionView">
      {/* <p className="nothing">No Events.</p> */}
      <EventCard />
    </div>
  )
}
