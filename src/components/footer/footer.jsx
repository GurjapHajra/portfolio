import React from 'react'
import "./footer.css"
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const footer = () => {
  return (
    <footer>
      <a className='footer__logo'>Gurjap Singh hajra</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>My Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href = "https://www.linkedin.com/in/gurjap-singh-hajra-33718b20b/" target="_blank"><BsLinkedin/></a>
        <a href = "https://github.com/GurjapHajra" target="_blank"><BsGithub/></a>
        <a href = "https://www.instagram.com/gurjapsinghhajra/" target="_blank"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gurjap Singh Hajra</small>
      </div>

    </footer>
  )
}

export default footer