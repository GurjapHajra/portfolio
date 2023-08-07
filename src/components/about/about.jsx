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
          <p>Computers and software have always fascinated me, ever since I was a kid in India. I have
pursued my passion for computer science through my education and my hobbies. In this
essay, I will tell you more about myself, my background, my inspiration, and my artifact. My
name is Gurjap Hajra and this is who I am.
One of the most important aspects of my identity is my background. I spent the first twelve
years of my life in India, where I learned how to be a hardworking and social man. Living in
India taught me how to overcome challenges, appreciate diversity, and respect different
cultures. When I moved to Canada, I was able to adapt quickly and make new friends with
ease. My background has shaped me into the person I am today.
Another important aspect of my identity is my education. I have always been passionate
about computer science and software development. I worked hard to get accepted into my
dream program of Computer Science at York University. I chose York because of its vibrant
culture and its excellent reputation for computer science. I’m currently in my third year of
study and I’m looking forward to graduating in 2025. I enjoy learning new skills and
technologies that can help me solve problems and create innovative solutions.
Besides my education, I also have many hobbies that reflect my interests and personality. I
love playing various sports, such as cricket, pool, table tennis, and online video games.
Playing sports helps me relax, have fun, and stay fit. I also like to challenge myself and
compete with others. Playing online video games allows me to connect with people from
different countries and backgrounds.
In conclusion, I’m a passionate computer science student who has a diverse background, a
strong work ethic, and a variety of hobbies. My inspiration is Andrew Tate, who has
motivated me to take action and be proactive in my life. My artifact is a quote from him that
resonates with me: “the temporary satisfaction of quitting is outweighed by the eternal
suffering of being nobody”. This quote reflects my philosophy of life: to work hard, to be
someone significant, and to be remembered.

          </p>

          <a href='#contact' className='btn btn-primanry'>Let's talk</a>
          </div>

        </div>

      </div>

    </section>
  )
}

export default about