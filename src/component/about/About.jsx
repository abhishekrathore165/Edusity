import React from 'react'
import './about.css'
import about_img from '../Assests/about.png'
import play_icon from '../Assests/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt=""  className='about-img' />
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="aboutright">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque explicabo alias tempora repellat voluptatum, doloribus reprehenderit iusto hic maxime dolores sapiente tenetur quisquam animi veritatis. Fugiat at cum non!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quaerat a neque architecto, maxime voluptatum consectetur non ea. Doloremque repellat pariatur cum! Vero alias necessitatibus quis minima amet vel nulla optio voluptates, dolorum illo blanditiis doloremque, veniam nostrum iste nihil!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In impedit quae vel dicta ab ullam incidunt voluptas earum dolores, id, ea, necessitatibus quos eaque. Velit magni natus quod error fuga iusto voluptate nam sit? Harum voluptate expedita omnis odit earum quis eligendi quasi officiis ut porro quos alias, culpa sed.</p>
      </div>
    </div>
  )
}
export default About
