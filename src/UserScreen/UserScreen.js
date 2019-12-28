import React, { Component } from 'react'
import './UserScreen.css'
import SideBar from '../General Layout/SideBar/SideBar'
import EventView from './EventView/EventView'
import TabBar from '../General Layout/TabBar/TabBar'
import Organizations from './OrgView/Organizations'
import AccountPage from './AccountPage/AccountPage'
import tabStore from '../Redux/Reducers';

export default class UserScreen extends Component {

  constructor(props) {
    super(props);
    
    // Set the state for this component
    this.state = {
      viewIndex: 0
    }

    // Receive real time updates on tab change
    tabStore.subscribe(() => {
      this.setState(Object.assign(this.state, { viewIndex: tabStore.getState() }))
    })
  }

  render() {
    let currentView = <div></div>;

    console.log("Current tab index: ", tabStore.getState());

    switch (tabStore.getState()) {
      case 0:
        currentView = <EventView />;
        break;
      case 1:
        currentView = <Organizations />;
        break
      case 2:
        currentView = <AccountPage />;
        break
      default:
        break
    }

    return (
      <div>
        <div id="userScreen">
        <SideBar />
        {currentView}
        </div>
        <TabBar />
      </div>
    )
  }
}
