import React, { useState } from 'react'
import './TabBar.css'
import tabStore from '../Redux/Reducers';

// Tab Bar should only bar rendered when URL is '/' or '/home'.
export default function TabBar() {
  const tabHashes = ["#events", "#organizations", "#account"];

  let index = tabHashes.indexOf(document.location.hash);
  const [state, setState] = useState(index >= 0 ? index : 0);

  tabStore.subscribe(() => {
    setState(tabStore.getState())
  })

  function updateState(state) {
    document.location.hash = tabHashes[state];
    tabStore.dispatch({ "type": "update", "index": state });


  }

  let eventClass = state === 0 ? "selected" : ""
  let eventIcon = `static/assets/search${state === 0 ? "-highlighted" : ""}.svg`
  let orgClass = state === 1 ? "selected" : ""
  let orgIcon = `static/assets/orgs${state === 1 ? "-highlighted" : ""}.svg`
  let accountClass = state === 2 ? "selected" : ""
  let accountIcon = `static/assets/home${state === 2 ? "-highlighted" : ""}.svg`

  return (
    <div className="tabBar">
      <button className={eventClass} onClick={() => updateState(0)}>
        <div class="buttonContent">
          <img src={eventIcon} width="24px" alt="events" />
          <p>Events</p>
        </div>
      </button>

      <button className={orgClass} onClick={() => updateState(1)}>
        <div class="buttonContent">
          <img src={orgIcon} width="24px" alt="organizations" />
          <p>Organizations</p>
        </div>
      </button>
      
      <button className={accountClass} onClick={() => updateState(2)}>
        <div class="buttonContent">
          <img src={accountIcon} width="24px" alt="account" />
          <p>Account</p>
        </div>
      </button>
    </div>
  )
}
