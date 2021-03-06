import React from 'react';
import './App.css';
import "./Redux/Reducers";
import NavBar from './General Layout/NavBar/NavBar';
import About from './General Layout/About/About';
import Privacy from './General Layout/About/Privacy';
import SideMenu from './General Layout/SideMenu/SideMenu';
import NotFound from './General Layout/NotFound/NotFound';
import Login from './Login/Login';
import UserScreen from './UserScreen/UserScreen'
import ClaimTicket from './UserScreen/ClaimTicket/ClaimTicket'
import EventDetailPage from './UserScreen/EventDetailPage/EventDetailPage'
import './Data Structures/Data structures'

class App extends React.Component {

  render() {
    document.onclick = (event) => {
      // console.log(event.target);
      if (event.target.id === "sideMenu") {
        document.getElementById("sideMenu").style.backgroundColor = "transparent";
        document.getElementById("sideMenu").style.pointerEvents = "none"
        document.getElementById("sidePanel").style.width = "0"
      }
    }

    switch (window.location.pathname) {
      case "/about":
        return (
          <div>
            <SideMenu tabitem={"home"} />
            <NavBar tabitem={"about"} />
            <About />
          </div>
        )
      case "/privacy":
        return (
          <div>
            <SideMenu tabitem={"home"} />
            <NavBar tabitem={"privacy"} />
            <Privacy />
          </div>
        )
      case "/login":
        return (
          <div>
            <SideMenu tabitem={"home"} />
            <NavBar tabitem={"login"} />
            <Login />
          </div>
        )
      case "/":
      case "/home":
        // TODO: Org and user account differentiation

        return (
          <div className="canvas">
            <SideMenu tabitem={"home"} />
            <NavBar tabitem={"home"} />
            <UserScreen />
          </div>
        );
      case "/event":
        return (
          <div className="canvas">
            <SideMenu tabitem={"home"} />
            <NavBar tabitem={""} />
            <EventDetailPage />
          </div>
        )
      case "/ticket":
        return <ClaimTicket />
      case "/account/activate":
      case "/account/activateOrg":
      case "/account/resetpassword":
        window.location.host = "account.eventure-app.com";
        break;
      default:
        return <NotFound msg={window.location.pathname} />
    }
  }
}

export default App;
