import React from 'react'
import './UserScreen.css'
import SideBar from '../General Layout/SideBar/SideBar'
import EventView from './EventView/EventView'
import TabBar from '../General Layout/TabBar/TabBar'

export default function UserScreen() {
  return (
    <div>
      <div id="userScreen">
      <SideBar />
      <EventView />
      </div>
      <TabBar />
    </div>
  )
}
