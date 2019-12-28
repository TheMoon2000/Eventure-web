import React from 'react'
import './Login.css'
import $ from 'jquery'

export default function Login() {
  return (
    <div className="background">
      <div className="login-page">
        <div className="form">
          <h3>Log In</h3>
            <form className="login-form" id="login_form" method="post" onSubmit={tmpWarning}>
              <input type="username" placeholder="Email / Org ID" name="login"/>
              <input type="password" placeholder="Password" name="password"/>
              <button type="submit">Sign In</button>
            </form>
          </div>
      </div>
    </div>
  )
}

function tmpWarning(info) {
  info.preventDefault();
  alert("We're currently working on this feature. In the mean time, please use our mobile app to log in!");
}

function handleLogin(info) {
  const username = document.getElementById('login_form').children[0].value;
  const password = document.getElementById('login_form').children[1].value;
  let button = document.getElementById('login_form').children[2];
  button.innerHTML = "Signing in..."
  button.style.cursor = "not-allowed"
  
  $.get({
    url: process.env.REACT_APP_API_URL + "account/Authenticate",
    headers: { "Authorization": process.env.REACT_APP_AUTH_TOKEN },
    data: { "login": username, "password": password },
    dataType: "text"
  }).done( function(data) {
    try {
      let json = JSON.parse(data);
      if (json.status === "success") {
        alert("success!")
        console.log(json)
      } else {
        alert("Error: " + json.status);
      }
    } catch (SyntaxError) {
      alert("A server error has occurred! Sorry.")
    }
  }).fail( function(data) {
    console.log(data)
  }).always( function(data) {
    button.innerHTML = "Sign In"
    button.style.cursor = "pointer"
  })

  info.preventDefault();
}
