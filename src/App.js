import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';
import NotFound from './NotFound/NotFound';

class App extends React.Component {

  render() {
    switch (window.location.pathname) {
      case "/about":
        return (
          <div>
            About page
          </div>
        )
      case "/login":
        return (
          <div>
            Login
          </div>
        )
      case "/":
        // TODO: Org and user account differentiation
        return (
          <div>
            <NavBar />
            <div className="main">
              <SideBar />
            </div>
          </div>
        );
      default:
        return <NotFound msg={window.location.pathname} />
        // return <body className="background">Not found</body>
    }
  }
}

export default App;
