import { useState } from 'react'
import EmailLogo from '../assets/email.svg'
import PhoneLogo from '../assets/phone.svg'
import LocationLogo from '../assets/location.svg'
import '../styles/cv.css'

function CV() {
    return (
        <div className="cv">
            <CVHeading />
        </div>
    )
}

function CVHeading() {
    return (
        <>
        <div className="heading">
            <h1 className="name">John Doe</h1>
            <div className="personal-information">
                <div className="email">
                    <img src={EmailLogo} alt="Email Logo" />
                    John.Doe@email.com
                </div>
                <div className="phone">
                    <img src={PhoneLogo} alt="Phone Logo" />
                    (614)-555-5555
                </div>
                <div className="location">
                    <img src={LocationLogo} alt="Location Logo" />
                    Columbus, OH
                </div>
            </div>
        </div>
        </>
    )
}

export default CV;