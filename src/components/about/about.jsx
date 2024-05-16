import React from 'react'
import "./about.css"
import photo from "../../assets/try3.JPG"
import {FaAward,FaUsers,FaFolder} from "react-icons/fa"

const about = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">

        <div className='image__container'>
          <div className="about__me">
            <div className="about__me-image">
              <img src={photo}/>
            </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>6+ years coding</small>
          </article>

          <article className='about__card'>
            <FaUsers className='about__icon'/>
            <h5>Education</h5>
            <small>Computer Science (8.4/9.0) GPA</small>
          </article>

          <article className='about__card'>
            <FaFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ projects</small>
          </article>
          </div>
          <div id='about_info'>
          <p>Computers and software have fascinated me since childhood, 
            driving my passion for computer science through my education 
            and hobbies. My diverse experiences taught me to overcome 
            challenges and appreciate different cultures. I enjoy playing 
            cricket, pool, and table tennis, which help me relax, stay fit, 
            and connect with people from various backgrounds. My name is Gurjap 
            Hajra, and this is my story.
          </p>

          <a href='#contact' className='btn btn-primanry'>Let's talk</a>
          </div>

        </div>

      </div>

    </section>
  )
}

export default about