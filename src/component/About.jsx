import React, {useEffect} from 'react'
import './About.css'
import aboutPhoto from '../assets/image2.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <section className="About" id="About">
            <img data-aos="slide-up" className="photoAbout" src={aboutPhoto} alt="aboutPhoto" />
            <div id="aboutLogo">ABOUT</div>
            <div id="name">Hi! I'm Fahmi Firmansyah</div>
            <div id="aboutMe">Far far Away, behind the world mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.</div>
            <div id="resumeLink">Checkout my resume</div>
            <div className="link">
                <a href="www.facebook.com" class="fa fa-facebook" > </a>
                <a href="www.twitter.com" class="fa fa-twitter" > </a>
                <a href="www.instagram.com" class="fa fa-instagram"> </a>
            </div>
            <div id="simple-contact">
                <div id="title">Contact me here!</div>
                <div className="contact-t">Email: </div> <div className="contact-body">fahmifirmansyah917@gmail.com</div>
                <div className="contact-t">Phone: </div> <div className="contact-body">+6282118598937</div>
            </div>
        </section>
    )
}


export default Header;