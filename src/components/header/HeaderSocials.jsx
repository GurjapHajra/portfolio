import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href = "https://www.linkedin.com/in/gurjap-singh-hajra/" target="_blank"><BsLinkedin/></a>
        <a href = "https://github.com/GurjapHajra" target="_blank"><BsGithub/></a>
        <a href = "https://www.instagram.com/gurjapsinghhajra/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials