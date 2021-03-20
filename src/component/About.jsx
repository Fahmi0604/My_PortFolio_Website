import React, { useEffect } from 'react'
import './About.css'
import aboutPhoto from '../assets/FAHMI.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="About" id="About">
            <div className="row-about">
                <div className="column-about" id="about-img">
                    <img data-aos="fade-up" src={aboutPhoto} alt="aboutPhoto" />
                </div>
                <div className="column-about">
                    <div id="aboutLogo">ABOUT</div>
                    <div id="name">Hi! I'm Fahmi Firmansyah</div>
                    {/* <div id="aboutMe">Far far Away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.</div> */}
                    <div id="aboutMe">I am a student majoring in Information Technology from the Malang State Polytechnic campus who has the ambition to create my own startup.</div>
                    <div id="resumeLink">
                        <a href="/resume">Checkout my resume</a>
                    </div>
                    <div className="link">
                        <a href="https://www.facebook.com/rivalbocah.imortal/" class="fa fa-facebook" > </a>
                        <a href="https://twitter.com/Fahmi5121" class="fa fa-twitter" > </a>
                        <a href="https://www.instagram.com/_fahmifs/" class="fa fa-instagram"> </a>
                    </div>
                    <div id="simple-contact">
                        <div id="title">Contact me here!</div>
                        <div className="contact-t">Email: </div> <div className="contact-body">fahmifirmansyah917@gmail.com</div>
                        <div className="contact-t">Phone: </div> <div className="contact-body">+6282118598937</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;