import React from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineFolderOpen} from "react-icons/ai"
import {BsChatText} from "react-icons/bs"
import { useState } from 'react'

const Navga = () => {

  const [activeNav,setActiveNav] = useState("#");
  /* too activate live navbar changing
  document.addEventListener(
    "mouseover",
    (event) => {
        if(event.path[0].id == "about"){
          console.log("about")
          setActiveNav("#about")
        }else if(event.path[0].id == "experience"){
            console.log("experience")
            setActiveNav("#experience")
        }else if(event.path[0].id == "projects"){
          console.log("#projects")
          setActiveNav("#projects")
        }else if(event.path[0].id == "contact"){
          console.log("contact")
          setActiveNav("#contact")
        }else if(event.path[0].id == "header"){
          console.log("#")
          setActiveNav("#")
        }
    }, 
    { passive: true }
  );
  */

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><AiOutlineBook/></a>
      <a href='#projects' onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><AiOutlineFolderOpen/></a>
      <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BsChatText/></a>
    </nav>
  )
}

export default Navga;