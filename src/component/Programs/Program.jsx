import React from 'react'
import './program.css'
import program_1 from '../Assests/program-1.png'
import program_2 from '../Assests/program-2.png'
import program_3 from '../Assests/program-3.png'
import program_icon_1 from '../Assests/program-icon-1.png'
import program_icon_2 from '../Assests/program-icon-2.png'
import program_icon_3 from '../Assests/program-icon-3.png'
const Program = () => {
  return (
    <div className='programs' >
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graguation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Program
