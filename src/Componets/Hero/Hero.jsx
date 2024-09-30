import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


function Hero() {
  return (
    <>
     
       <div className="hero">
         <div className="hero-left">
            <h2>NEEW ARRIVALS ONLY</h2>

            <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" width={"60px"} />
            </div>

            <p style={{fontFamily:'Rockwell'}}>Collections</p>
            <p style={{fontFamily:'Rockwell'}}>for everyone</p>
            </div>
            <div className="hero-letes-btn">
                <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>

           <div className="hero-right">
             <img src={hero_image} alt="" width={"560px"} height={"525px"} />
       </div>
    </div>
    </>
  )
}

export default Hero