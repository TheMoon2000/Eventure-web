import React, { Component } from 'react'
import "./Organizations.css"
import axios from 'axios'
import OrganizationCell from './OrganizationCell'
  

export default class Organizations extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      organizations: []
    }

    axios.get(
      process.env.REACT_APP_API_URL + 'account/ListOrgs',
      { headers: {"Authorization": process.env.REACT_APP_AUTH_TOKEN } }
    ).then( (response) => {
      this.setState({
        loaded: true,
        organizations: response.data
      })
      console.log(`Loaded ${this.state.organizations.length} organizations`)
    })
    .catch( (error) => {
      console.log(error)
    })
  }
  
  render() {

    let content;
    let orgCells = [];

    for (let i = 0; i < this.state.organizations.length; i++) {
      orgCells.push(<OrganizationCell orgInfo={this.state.organizations[i]} key={this.state.organizations[i].ID} />);
    }

    if (!this.state.loaded) {
      content = <p className="nothing">Loading organizations...</p>
    } else if (orgCells.length > 0) {
      content = orgCells
    } else {
      content = <p className="nothing">No organizations.</p>
    }

    return (
      <div className="orgTableView">
        {content}
      </div>
    )
  }
}