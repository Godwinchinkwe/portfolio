import React, {useState} from 'react'
import "./Header.css"
import Nav from './Nav'
import {ImMenu3  } from 'react-icons/im'
import {FaTimes} from 'react-icons/fa'
import {BiLogoUnsplash} from 'react-icons/bi'
import {useNavigate} from "react-router-dom"

function Header() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handlechange = () => { 
    setToggle(!toggle) 
  }

  return (
    <div class="main_header">
      <div class="header_wrap">
    <BiLogoUnsplash fontSize={"60px"}  onClick={() => navigate('/')} />
    <Nav />
    <button class="butt"> Github profile</button>

    <div class="burger">
    {toggle ? <FaTimes fontSize={"50px"} onClick={handlechange}/>: <ImMenu3 fontSize={"50px"} onClick={handlechange}/>}
              {/* {toggle ? <Dropdown props={handlechange}/>: null} */}
    </div>

      </div>
    </div>
  )
}

export default Header
