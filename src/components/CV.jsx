import { useState } from 'react'
import education from '../index' // Update eventually 
import EmailLogo from '../assets/email.svg'
import PhoneLogo from '../assets/phone.svg'
import LocationLogo from '../assets/location.svg'
import '../styles/cv.css'

const personalInfo = {
    name: "John Doe",
    email: "John.Doe@email.com",
    phone: "+1(614)-555-5555",
    location: "Columbus, OH",
}

const professionalExperience = {
    sectionTitle: "Professional Experience",
    date: "07/2022 - 12/2023",
    location: "Cleveland, OH",
    title: "Cleveland Clinic",
    info: "Clinical Microbiology Laboratory",
}

function CV() {
    return (
        <div className="cv">
            <CVHeading 
                name={personalInfo.name}
                email={personalInfo.email}
                phone={personalInfo.phone}
                location={personalInfo.location}    
            />
            <CVSection 
                title={education.sectionTitle}
                contents={education}
            />
            <CVSection 
                title={professionalExperience.sectionTitle}
                contents={professionalExperience}
            />
        </div>
    )
}

function CVHeading({ name, email, phone, location }) { // Add props for name, email, phone, location
    return (
        <div className="heading">
            <h1 className="name">{name}</h1>
            <div className="personal-information">
                <div className="email">
                    <img src={EmailLogo} alt="Email Logo" />
                    {email}
                </div>
                <div className="phone">
                    <img src={PhoneLogo} alt="Phone Logo" />
                    {phone}
                </div>
                <div className="location">
                    <img src={LocationLogo} alt="Location Logo" />
                    {location}
                </div>
            </div>
        </div>
    )
}

function CVSection({ title, contents }) { 
    return (
        <div className="section">
            <h2>{title}</h2>
            <InformationPiece 
                date={contents.date}
                location={contents.location}
                title={contents.title}
                info={contents.info}
            />
        </div>
    )
}

function InformationPiece({ date, location, title, info }) {
    return (
        <div className="piece">
            <div className="date-location">
                <p className="date">{date}</p>
                <p className="location">{location}</p>
            </div>
            <div className="title-info">
                <h3 className="title">{title}</h3>
                <p className="info">{info}</p>
            </div>
        </div>
    )
}

export default CV;