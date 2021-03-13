import React from 'react'
import './Education.css'

const Education = () => {
    return(
        <div className="Education">
            <div className="education-content">
                <div id="education-title">Education</div>
                <div className="education-body">
                    <div className="title-degree">
                    Computer Network Engineering Diploma
                        <div className="title-school">
                         - State Vocational School of Winongan
                        </div>
                    </div>
                    <div className="title-year">2015 - 2018</div>
                    <div className="title-city">Pasuruan-Indonesia</div>
                    <hr/>
                </div>
                <div className="education-body">
                    <div className="title-degree">
                    Bachelor of Applied Informatics Engineering 
                        <div className="title-school">
                         - State Polytechnic of Malang
                        </div>
                    </div>
                    <div className="title-year">2018 - Present</div>
                    <div className="title-city">Malang-Indonesia</div>
                    <hr/>
                </div>
                <div className="education-2"></div>
            </div>
        </div>
    )
}

export default Education;