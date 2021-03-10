import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './MyServices.css'

const MyService = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <div className="service" id="Services">
            <div id="title-1">WHAT I DO</div>
            <div id="title-2">My services</div>
            <div className="row-service" >
                <div className="column-service" id="service-1">
                    <a href="#Services" className="fa fa-code"> </a>
                    <p>Web development</p>
                    <p>html/css/javascript</p>
                </div>
                <div className="column-service" id="service-2">
                    <a href="#Services" className="fa fa-android"> </a>
                    <p>Android development</p>
                    <p>Java</p>
                </div>
                <div className="column-service" id="service-3">
                    <a href="#Servoces" className="fa fa-microchip"> </a>
                    <p>Robotic</p>
                    <p>C/Arduino</p>
                </div>
            </div>
        </div>
    );
}

export default MyService;