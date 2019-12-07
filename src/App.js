import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';
import About from './About/About';
import Privacy from './About/Privacy';
import SideMenu from './SideMenu/SideMenu';
import NotFound from './NotFound/NotFound';
import "./Redux/Reducers";
import Login from './Login/Login';
import TabBar from './TabBar/TabBar';

class App extends React.Component {

  render() {
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
            <div className="main">
              <SideBar />
            </div>
            <TabBar />
          </div>
        );
      default:
        return <NotFound msg={window.location.pathname} />
    }
  }
}

export default App;
