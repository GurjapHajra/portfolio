import React from 'react'
import "./projects.css"
import Chess from "../../assets/chess.png"
import _2048 from "../../assets/2048R.gif"
import seq from "../../assets/sequence.png"
import Dr from "../../assets/dr.eureka.jpg"
import mines from "../../assets/minesweeper_picture.jpg"
import port from "../../assets/website_picture.png"
import power from "../../assets/powerlevel_picture.png"

const projects = () => {

  const data = [
    {
      id: 1,
      image: power,
      title: "Power Level Compaison Website",
      github: 'https://github.com/GurjapHajra',
      demo: "https://powerlevel.ml"
    },
    {
      id: 2,
      image: port,
      title: "Portfolio Website",
      github: 'https://github.com/GurjapHajra/portfolio',
      demo: "https://gurjaphajra.tk"
    },
    {
      id: 3,
      image: seq,
      title: "Sequence Memory App",
      github: 'https://github.com/GurjapHajra/Centennials-IQ-test',
      demo: ""
    },
    {
      id: 4,
      image: mines,
      title: "MineSweeper App",
      github: 'https://github.com/GurjapHajra/Minesweeper',
      demo: ""
    },
    {
      id: 5,
      image: Dr,
      title: "Dr.Eureka App",
      github: 'https://github.com/GurjapHajra/Dr.Eureka',
      demo: ""
    },
    {
      id: 6,
      image: Chess,
      title: "Chess",
      github: 'https://github.com/GurjapHajra/Chess',
      demo: ""
    },
    {
      id: 7,
      image: _2048,
      title: "2048",
      github: 'https://github.com/GurjapHajra/2048',
      demo: ""
    },

    
  ]

  return (
    <section id='projects'>
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className="container project__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(<article key={id} className='project__item'>

            <div className="project__item-image">
              <img src={image} alt={title}/>
            </div>

            <h3>{title}</h3>
        
            <div className="project_item-cta">
          
              <a href={github} className='btn' target="_blank"> GitHub</a>
              {(demo!="") ? <a href={demo} className='btn btn-primary' target="_blank"> Live Demo</a> : null}
                

            </div>
        
            </article>)
          })
        }

      </div>
    </section>

    

  )
}

export default projects