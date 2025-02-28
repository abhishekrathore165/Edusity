import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../Assests/logo.png'
import { Link } from 'react-scroll'
import menu from '../Assests/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky]= useState(false);



  useEffect(()=>{ 
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
      
    })
  },[])
const [mobile,setMobile]= useState(false)

  const toggleMenu =()=>{
      mobile? setMobile(false) : setMobile(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} `}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobile?'':'mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500} >Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} >About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500} >Contact us</Link></li>
      </ul>
      <img src={menu} alt="" className='menu' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
