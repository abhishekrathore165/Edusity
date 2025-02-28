import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../Assests/next-icon.png'
import back_icon from '../Assests/back-icon.png'
import user_1 from '../Assests/user-1.png'
import user_2 from '../Assests/user-2.png'
import user_3 from '../Assests/user-3.png'
import user_4 from '../Assests/user-4.png'
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
const slideForward=()=>{
    if(tx > -50){
        tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}
const slideBackward=()=>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='testimonial'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson 1</h3>
                            <span>Edusity, UsA</span>
                        </div>
                    </div>
                    <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceede my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson 2</h3>
                            <span>Edusity, UsA</span>
                        </div>
                    </div>
                    <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceede my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William Jackson 3</h3>
                            <span>Edusity, UsA</span>
                        </div>
                    </div>
                    <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceede my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson 4</h3>
                            <span>Edusity, UsA</span>
                        </div>
                    </div>
                    <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceede my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
