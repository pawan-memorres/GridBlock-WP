// import "./frontend.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./frontend.scss"

const divsToUpdate = document.querySelectorAll(".update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("update-me")
})

function OurComponent(props) {
  

  return (
    <div className="frontend">
        <h1 class="title">{props.title}</h1>
        <p>By {props.authorName}</p>
        <p> {props.date}</p>
        <h2 class="description">{props.description}</h2>
      
    </div>
  )
}
