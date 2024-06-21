import React from 'react'
import '../App.css'
import './hero.css'
import Img from '../assets/hero-img.png'

const Hero = () => {
  return (
    <section className="hero box">
      <div className="hero-container box">
        <div className="hero-txt">
          <h1>Grow your business with Akeshya</h1>
          <h2>We are team of talented website designers, developers & digital marketeers</h2>
          <a className="btn-light" href="/#">Get Started</a>
        </div>
        
        <div className="hero-img">
          <img src={Img} alt="work" />
        </div>

      </div>
    </section>
  )
}

export default Hero