import React from 'react'
import "./BlankButton.css"

export default function BlankButton(props) {
  return (
    <div>
      <button
        className={props.className}>{props.name}</button>
    </div>
  )
}
