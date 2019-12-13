import React, { useState } from 'react'
import "./SideBar.css"
import tabStore from '../../Redux/Reducers'

export default function SideBar() {
  let index = ["#events", "#organizations", "#account"].indexOf(document.location.hash);
  const [state, setState] = useState(index >= 0 ? index : 0);

  tabStore.subscribe(() => {
    setState(tabStore.getState())
  })

  function updateState(state) {
    tabStore.dispatch( { "type": "update", "index": state } )
  }

  let eventItem, orgItem, accountItem;

  switch (state) {
    case 1:
      eventItem = <a href="#events" onClick={() => updateState(0)}>Events</a>;
      orgItem = <a href="#organizations" className="highlighted">Organizations</a>;
      accountItem = <a href="#account" onClick={() => updateState(2)}>Account</a>;
      document.title = "Eventure | Organizations"
      break
    case 2:
      eventItem = <a href="#events" onClick={() => updateState(0)}>Events</a>;
      orgItem = <a href="#organizations" onClick={() => updateState(1)}>Organizations</a>;
      accountItem = <a href="#account" className="highlighted">Account</a>;
      document.title = "Eventure | Account"
      break
    case 0:
      eventItem = <a href="#events" className="highlighted">Events</a>;
      orgItem = <a href="#organizations" onClick={() => updateState(1)}>Organizations</a>;
      accountItem = <a href="#account" onClick={() => updateState(2)}>Account</a>;
      document.title = "Eventure | Events"
      break
    default:
      // Do nothing
      console.log(document.location.hash);
      break
  }

  return (
    <div id="sidebar">
      <h3>Eventure</h3>
      {eventItem}
      {orgItem}
      {accountItem}
    </div>
  )
}
