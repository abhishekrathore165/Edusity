import React from 'react'
import './hero.css'
import arrow from '../Assests/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>

        <div className="hero-text">
            <h1>We Ensure better education for a better world </h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowlwdgw, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore more <img src={arrow} alt="" /> </button>
        </div>
      
    </div>
  )
}

export default Hero
