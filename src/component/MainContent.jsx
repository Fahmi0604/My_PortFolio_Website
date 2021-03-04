import React, { Component } from 'react'
import Header from './Header'
import About from './About'
import MyService from './MyServices'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './MainContent.css'
import BackToTop from 'react-back-to-top-button'

class MainContent extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <About />
                <MyService />
                <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
                    <a href="#Back" className="fa fa-chevron-up"> </a>
                </BackToTop>
            </div>
        )
    }
}

export default MainContent
