import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="Contact">
            <div className="contact-content">
                <div id="contact-title">Contact Information</div>
                <div className="contact-information">
                    <div id="contact-address">
                        Address: <div className="contact-body">Raya Menangas Street, Kebonrejo Pasuruan East Java 67184</div>
                    </div>
                    <div id="contact-phone">
                        Phone: <div className="contact-body">+628118598937</div>
                    </div>
                    <div id="contact-email">
                        Email: <div className="contact-body">fahmifirmansyah917@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column contact-form">
                    <input type="text" placeholder="Your Name"/>
                    <input type="text" placeholder="Your Email"/>
                    <input type="text" placeholder="Subject"/>
                </div>
                <div className="column contact-maps">
                    <div id="maps"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;