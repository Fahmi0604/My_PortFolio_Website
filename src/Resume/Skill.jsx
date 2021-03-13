import React from 'react'
import './Skill.css'
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return(
        <div className="Skill">
            <div className="skill-content">
                <div id="skill-title">My Skill</div>
                <div className="progresbar">
                    <label htmlFor="">Html</label>
                    <ProgressBar completed={80} bgcolor="#2f89fc" baseBgColor="transparent"/>
                </div>
                <div className="progresbar">
                    <label htmlFor="">Css</label>
                    <ProgressBar completed={50} bgcolor="#2f89fc" baseBgColor="transparent"/>
                </div>
                <div className="progresbar">
                    <label htmlFor="">Javascript</label>
                    <ProgressBar completed={65} bgcolor="#2f89fc" baseBgColor="transparent"/>
                </div>
                <div className="progresbar">
                    <label htmlFor="">Java</label>
                    <ProgressBar completed={75} bgcolor="#2f89fc" baseBgColor="transparent"/>
                </div>
                <div className="progresbar">
                    <label htmlFor="">C</label>
                    <ProgressBar completed={25} bgcolor="#2f89fc" baseBgColor="transparent"/>
                </div>
            </div>
        </div>
    )
}

export default Skill;