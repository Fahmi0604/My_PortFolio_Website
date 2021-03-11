import React, { Component } from 'react'
import Header from '../component/Header'
import About from '../component/About'
import MyService from '../component/MyServices'
import Portfolio from '../component/Portfolio'
import Footer from '../component/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeContent.css'
import BackToTop from 'react-back-to-top-button'

class HomeContent extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <About />
                <MyService />
                <Portfolio />
                <Footer />
                <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
                    <a href="#Back" className="fa fa-chevron-up"> </a>
                </BackToTop>
            </div>
        )
    }
}

export default HomeContent;
