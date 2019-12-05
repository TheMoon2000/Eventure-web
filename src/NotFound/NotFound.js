import React from 'react'

export default function NotFound({msg}) {
  /*
  return (
    <body className="background">
      <div className="login-page" style={{width: "450px"}}>
        <div className="form">
          <h3>Not Found</h3>
          <p style={{color: "#707070"}}>Invalid URL: {msg}</p>
        </div>
      </div>
    </body>
  )*/
  return (
    <div className="background">
      <div className="login-page" style={{width: "450px"}}>
        <div className="form">
          <h3>Not Found</h3>
          <p style={{color: "#707070"}}>Invalid URL: {msg}</p>
        </div>
      </div>
    </div>
  )
}
