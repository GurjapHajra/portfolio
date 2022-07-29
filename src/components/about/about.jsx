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
            <small>6+ years coding minor and major projects</small>
          </article>

          <article className='about__card'>
            <FaUsers className='about__icon'/>
            <h5>Education</h5>
            <small>(BSc) Computer Science (8.4/9.0) GPA</small>
          </article>

          <article className='about__card'>
            <FaFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>mony project in app/web dev, AI, and much more</small>
          </article>
          </div>
          <div id='about_info'>
          <p>
          Hey, I am currently a Computer Science student at York university. I have completed many core computer science courses with exceptional grades.
          I have also been a part of many clubs such as the Specialist High Skills Major program, The robotics club, and the coding
club in my school. Throughout this time, I have developed very strong software and programming skills, which I
am sure can benefit your team.
          </p>

          <a href='#contact' className='btn btn-primanry'>Let's talk</a>
          </div>

        </div>

      </div>

    </section>
  )
}

export default about