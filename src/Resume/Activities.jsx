import React from 'react'
import './Activities.css'

const Activities = () => {
    return(
        <div className="Activities">
            <div className="activities-content">
                <div id="activities-title">Extracurricular Activities</div>
                <div className="activities-body">
                    <div className="title-position">
                    Deputy Head of the Software Division
                        <div className="title-activities">
                         - EEPROM
                        </div>
                    </div>
                    <div className="title-year">2018 - Present</div>
                    <div className="title-city">State Polytechnic of Malang</div>
                    <hr/>
                </div>
                <div className="activities-body">
                    <div className="title-position">
                    Crew of Abu Robocon Polinema 
                        <div className="title-activities">
                         - Indonesian Robot Contest
                        </div>
                    </div>
                    <div className="title-year">2019 - 2020</div>
                    <div className="title-city">State Polytechnic of Malang</div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default Activities;