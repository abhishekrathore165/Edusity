
import { useState } from 'react';
import './App.css';
import Contact from './component/Contact/Contact';
import Program from './component/Programs/Program';
import Testimonials from './component/Testimonial/Testimonials';
import About from './component/about/About';
import Campus from './component/campus/Campus';
import Footer from './component/footer/Footer';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';
import Video from './component/playvideo/Video';
import Title from './component/title/Title';

function App() {
  const [playState,setPlayState]= useState(false);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our PROGRAM" title="What We Offer" />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus/>
        <Title subtitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials/>
        <Title subtitle="Contact Us" title="Get in Touch" />
        <Contact/>
        <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
