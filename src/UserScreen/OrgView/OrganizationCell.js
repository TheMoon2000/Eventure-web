import React, { Component } from 'react'
import axios from 'axios'

export default class OrganizationCell extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logoImage: "static/assets/group.svg"
    }

    let encodedID = encodeURI(props.orgInfo.ID);
    axios.get(process.env.REACT_APP_API_URL + 'account/GetOrgLogo?id=' + encodedID)
      .then( (response) => {
        if (!response.data.startsWith("no")) {
          this.setState({
            logoImage: process.env.REACT_APP_API_URL + 'account/GetOrgLogo?id=' + encodedID
          })
        }
      })
  }

  render() {
    return (
      <div className="orgCell cellWithShadow">
        <div className="orgCellContent">
          <img src={this.state.logoImage} width="24px" alt="" />
          <p>{this.props.orgInfo.Title}</p>
        </div>
      </div>
    )
  }
}
