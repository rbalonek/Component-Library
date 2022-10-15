import React from 'react'
import PasswordLogin from '../../components/Login/PasswordLogin/PasswordLogin'
import "./Home.css"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className='component-holder'>
      <PasswordLogin />
      </div>
    </div>
  )
}
