import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div className="Profile">
            <div className="profile-content">
                <div id="profile-title">Profile</div>
                <div id="profile-title-2">I am a student majoring in Information Technology from the Malang State Polytechnic campus who has the ambition to create my own startup.</div>
                <div id="profile-body">I participate in the robotics community on my campus, and I have participated in and contributed to various robotics competitions, one of which is the KRI (Indonesian Robot Contest) competition and was able to bring my campus to the national level.</div>
                <div className="title-body">
                    Name:<div id="profile-name">Fahmi Firmansyah</div>
                </div>
                <div className="title-body">
                    Address:<div id="profile-address">Jl. Simpang tiga ex menangas Km 01 banyubiru Pandan, Pandan, Kebonrejo, Kec. Grati, Pasuruan, Jawa Timur 67184</div>
                </div>
                <div className="title-body">
                    Phone: <div id="profile-phone">+6282118598937</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;