import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Portfolio.css'
import aboutPhoto from '../assets/image2.jpeg'

const Portfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <div className="portfolio" id="Portfolio">
            <div id="title-1">PORTFOLIO</div>
            <div id="title-2">Checkout a few of my works</div>
            <div className="portfolio-body">
                <div className="portfolio-1">
                    <img data-aos="slide-up" src={aboutPhoto} alt="coba"/>
                    <div id="title-body">APPLICATION</div>
                    <div id="project-title">My Mushaf</div>
                    <div id="project-body">
                        {/* My Mushaf adalah aplikasi Quran pocket yang saya buat sendiri, dimana di dalam nya sudah terdapat alarm sholat, serta audio di setiap surat-surat al-quran */}
                        My Mushaf is a pocket Quran application that I made myself, where there is already a prayer alarm in it, as well as audio in every chapter in the Quran
                        </div>
                    <div id="project-view">View Project</div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;