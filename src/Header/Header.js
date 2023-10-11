import React from 'react'
import "./Header.css"
import  logo192  from "../Img/logo192.png"
import Nav from './Nav'

function Header() {
  return (
    <div class="main_header">
      <div class="header_wrap">
    <img class="logo" src={logo192} alt="logo" />
    <Nav />
    <button class="butt"> Github profile</button>

      </div>
    </div>
  )
}

export default Header
