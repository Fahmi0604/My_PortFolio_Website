import React, { useEffect } from 'react'
import './Header.css'
import profilePhoto from '../assets/image.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'

const Header = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="TopBar">
                <img className="photoProfile" src={profilePhoto} alt="photoProfile" />
                <p className="nameLogo">FAHMI FIRMANSYAH</p>

                {/* <button id="SideBar">
                    <div className="burgerMenu"></div>
                    <div className="burgerMenu"></div>
                    <div className="burgerMenu"></div>
                </button> */}

                <div className="navBar">
                    <ul>
                            <li><Link activeClass="active" to="Footer" spy={true} smooth={true} offset={0} duration={1500}>
                                Contact
                            </Link></li>
                            <li><Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1500}>
                                About
                            </Link></li>
                            <li><Link activeClass="active" to="Portfolio" spy={true} smooth={true} offset={0} duration={1500}>
                                Portfolio
                            </Link></li>
                            <li><Link activeClass="active" to="Services" spy={true} smooth={true} offset={0} duration={1500}>
                                Services
                            </Link></li>
                            <li><Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1500}>
                                Resume
                            </Link></li>
                            <li><Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1500}>
                                Home
                            </Link></li>
                    </ul>
                </div>

                    <div data-aos="fade-up" className="title">
                        <div id="title1">I'M FROM MALANG</div>
                        <div id="title2">A WEB DEVELOPER</div>
                    </div>
                </div>

            </div>
    )
}


export default Header;