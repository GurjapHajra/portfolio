import React from 'react'
import "./about.css"
import photo from "../../assets/photo_2.JPG"
import {FaAward,FaUsers,FaFolder} from "react-icons/fa"

const about = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={photo}/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ years</small>
          </article>

          <article className='about__card'>
            <FaUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>3+ years</small>
          </article>

          <article className='about__card'>
            <FaFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>3+ years</small>
          </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores provident consectetur porro in quia corrupti minus sit eaque ea asperiores dolores iusto deleniti adipisci illum, quis repudiandae facere voluptate.
          </p>

          <a href='#contact' className='btn btn-primanry'>Let's talk</a>

        </div>

      </div>

    </section>
  )
}

export default about