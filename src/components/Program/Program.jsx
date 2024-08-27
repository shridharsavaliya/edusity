import React from 'react'
import './Program.css'
import Program1 from "../../assets/program-1.png"
import Program2 from "../../assets/program-2.png"
import Program3 from "../../assets/program-3.png"
import Programicon_1 from "../../assets/program-icon-1.png"
import Programicon_2 from "../../assets/program-icon-2.png"
import Programicon_3 from "../../assets/program-icon-3.png"

function Program() {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={Program1} alt="" />
            <div className="caption">
                <img src={Programicon_1} alt="" />
                <p>Graduate Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program2} alt="" />
            <div className="caption">
                <img src={Programicon_2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program3} alt="" />
            <div className="caption">
                <img src={Programicon_3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}


export default Program
