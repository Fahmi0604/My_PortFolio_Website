import React, { useEffect } from 'react';
import './Header.css';
import profilePhoto from '../assets/image.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link as LinkScroll } from 'react-scroll';
// import Home from './MainContent';

const Header = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
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
                        <li>
                            <LinkScroll activeClass="active" to="Footer" spy={true} smooth={true} offset={0} duration={1500}>
                                {/* <Link to="/Contact">Contact</Link> */}
                                Contact
                            </LinkScroll>
                        </li>
                        <li>
                            <LinkScroll activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1500}>
                                About
                            </LinkScroll>
                        </li>
                        <li>
                            <LinkScroll activeClass="active" to="Portfolio" spy={true} smooth={true} offset={0} duration={1500}>
                                Portfolio
                            </LinkScroll>
                        </li>
                        <li>
                            <LinkScroll activeClass="active" to="Services" spy={true} smooth={true} offset={0} duration={1500}>
                                Services
                            </LinkScroll>
                        </li>
                        {/* <li>
                            <LinkScroll activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1500}>
                                Resume
                            </LinkScroll>
                        </li> */}
                        <li>
                            <LinkScroll activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={1500}>
                                {/* <Link to="/">Home</Link> */}
                                Home
                            </LinkScroll>
                        </li>
                    </ul>
                </div>

                <div data-aos="fade-up" className="title">
                    <div id="title1">I'M FROM PASURUAN</div>
                    <div id="title2">A WEB DEVELOPER</div>
                </div>

                {/* <div data-aos="fade-up" className="title">
                    <div id="title1">HELLO! I'M</div>
                    <div id="title2">FAHMI FIRMANSYAH</div> 
                 </div> */}
            </div>
    )
}


export default Header;