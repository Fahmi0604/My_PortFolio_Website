import React, { Component } from 'react'
import Header from '../component/Header_2'
import About from '../component/About'
import Profile from './Profile'
import Skill from './Skill'
import Activities from './Activities'
import Education from './Education'
import Footer from '../component/Footer'
// import Portfolio from './Portfolio'
// import Footer from '../component/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ResumeContent.css'
import BackToTop from 'react-back-to-top-button'

class ResumeContent extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <About />
                <Profile />
                <Skill />
                <Activities />
                <Education />
                <Footer />
                {/* <Footer /> */}
                <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
                    <a href="#Back" className="fa fa-chevron-up"> </a>
                </BackToTop>
            </div>
        )
    }
}

export default ResumeContent;
