import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import { Map, GoogleApiWrapper } from 'google-maps-react';


class Contact extends React.Component {

    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_14l7y81', e.target, 'user_tarhCaoNOm2tIBJlgF2P7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    render() {
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
                        <form onSubmit={this.sendEmail}>
                            <input type="text" placeholder="Your Name" name="name" />
                            <input type="text" placeholder="Your Email" name="email" />
                            <input type="text" placeholder="Subject" name="subject" />
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" />
                            <input id="btn-contact-submit" value="Send Message" type="submit" />
                        </form>
                    </div>
                    <div className="column contact-maps">
                        <div id="maps-style">
                            <Map
                                google={this.props.google}
                                zoom={17}
                                // style={mapStyles}
                                initialCenter={
                                    {
                                        lat: -7.73456,
                                        lng: 112.96888
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

// export default Contact;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBRLijjwsXGAqW8lqCuh7kSYPUSdAiXDM4'
})(Contact);