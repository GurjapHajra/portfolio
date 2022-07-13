import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {

    function openCV(){
        window.open(CV,"_blank");
    }

  return (
    <div className='cta'>
        <a onClick={openCV} className = "btn">CV</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA