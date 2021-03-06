import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Portfolio.css'
import myMushaf from '../assets/mymushaf.png'
import KronosWatch from '../assets/Stopwatch.png'
import Apotik from '../assets/Apotik.png'

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
                    <img data-aos="slide-up" src={myMushaf} alt="quran"/>
                    <div id="title-body-1">APPLICATION</div>
                    <div id="project-title-1">My Mushaf</div>
                    <div id="project-body-1">
                        {/* My Mushaf adalah aplikasi Quran pocket yang saya buat sendiri, dimana di dalam nya sudah terdapat alarm sholat, serta audio di setiap surat-surat al-quran */}
                        My Mushaf is a pocket Quran application that I made myself, where there is already a prayer alarm in it, as well as audio in every chapter in the Quran
                        </div>
                    <div id="project-view-1">View Project</div>
                </div>
                <div className="portfolio-2">
                    <img data-aos="slide-up" src={KronosWatch} alt="timer"/>
                    <div id="title-body-2">APPLICATION</div>
                    <div id="project-title-2">Kronos watch</div>
                    <div id="project-body-2">
                        {/* My Mushaf adalah aplikasi Quran pocket yang saya buat sendiri, dimana di dalam nya sudah terdapat alarm sholat, serta audio di setiap surat-surat al-quran */}
                        Chronos watch is a time management application that I made myself. where there is already a countdown timer feature, as well as a stopwatch with an elegant appearance
                        </div>
                    <div id="project-view-2">View Project</div>
                </div>
                <div className="portfolio-3">
                    <img data-aos="slide-up" src={Apotik} alt="apotik"/>
                    <div id="title-body-3">WEB-BASED INFORMATION SYSTEM</div>
                    <div id="project-title-3">Pharmacy Information System</div>
                    <div id="project-body-3">
                        {/* My Mushaf adalah aplikasi Quran pocket yang saya buat sendiri, dimana di dalam nya sudah terdapat alarm sholat, serta audio di setiap surat-surat al-quran */}
                        Pharmacy information system is a simple information system website about a pharmacy that I made myself, where there is already a login feature and is already based on the Mysql CRUD database.
                        </div>
                    <div id="project-view-3">View Project</div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;