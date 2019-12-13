import React from 'react'
import "./ClaimTicket.css"

export default function ClaimTicket() {
  return (
    <div id="claimTicket" className="background">
      <div class="login-page">
        <div class="form">
          <h2>Claim Ticket</h2>
          <div class="ticket">
            <h4>[Title]</h4>
            <p>Ticket type</p>
            <p>[Quantity]</p>
          </div>
          <form action="ticket" target = "_self" class="login-form" method="POST">
            <br />
            <input type="text" placeholder="Your Name" name="Name" />
            <input type="email" placeholder="Email" name="Email" />
            <input type="hidden" name = "ID" value="<?php echo $ID?>" />
            <button type="submit">Claim</button>
            <p>IOS User? <a href="https://apps.apple.com/app/id1478542362">Download</a> our mobile app!</p>
          </form>
        </div>
      </div>
    </div>
  )
}
