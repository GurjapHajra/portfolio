import React from 'react'
import "./header.css"
import CTA from "./CTA"
import photo from "../../assets/photo.png"
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id = "header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gurjap Hajra</h1>
        <h5 className="text-light">LIVE YOUR DREAM</h5>
        <CTA/>

        <HeaderSocials/>

        <div id='me'>
          <img src={photo} alt='me'/>
        </div>

        <a href='#contact' className = "scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header