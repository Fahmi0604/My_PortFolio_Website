import React, { Component } from 'react'
import Header from '../component/Header_2'
import Footer from '../component/Footer'
import Contact from './Contact'
import './ContactContent.css'
import BackToTop from 'react-back-to-top-button'

class ContactContent extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <Contact />
                <Footer />
                <BackToTop showOnScrollUp showAt={100} speed={1500} easing="easeInOutQuint">
                    <a href="#Back" className="fa fa-chevron-up"> </a>
                </BackToTop>
            </div>
        )
    }
}

export default ContactContent;
