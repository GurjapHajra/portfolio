import React from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineContacts,AiOutlineMessage,AiOutlineProject} from "react-icons/ai"
import { useState } from 'react'

const Navga = () => {

  const [activeNav,setActiveNav] = useState("#")

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href='#projects' onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><AiOutlineProject/></a>
      <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><AiOutlineBook/></a>
      <a href='#contact' onClick={() => setActiveNav("#contect")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineContacts/></a>
      <a href='#contact'><AiOutlineMessage/></a>
    </nav>
  )
}

export default Navga;