import React from 'react'
import "./about.css"
import about from "../../assets/about.png"

const About = () => {
  return (
    <div className="about container">
        <div className="about-container">
            <div className="about-content">
                <div className="about-img">
                    <img src={about} alt="" />
                </div>
                <div className="about-data">
                    <h1>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                    <button className='cont-btn top-btn'>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About