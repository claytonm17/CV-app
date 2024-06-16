import { useState } from 'react'
import education from '../index' // Update eventually 
import EmailLogo from '../assets/email.svg'
import PhoneLogo from '../assets/phone.svg'
import LocationLogo from '../assets/location.svg'
import '../styles/cv.css'

/*
const professionalExperience = {
    sectionTitle: "Professional Experience",
    date: "07/2022 - 12/2023",
    location: "Cleveland, OH",
    title: "Cleveland Clinic",
    info: "Clinical Microbiology Laboratory",
}

const professionalExperience2 = {
    date: "01/2024 - Present",
    location: "Columbus, OH",
    title: "The Ohio State University",
    info: "Wexner Medical Center",
}*/

function CV({ data }) {
    return (
        <div className="cv">
            <CVHeading 
                firstName={data.firstName}
                lastName={data.lastName}
                email={data.email}
                phone={data.phone}
                location={data.location}    
            />            
            <CVSection
                title={education.sectionTitle}
                contents={education}
            />
        </div>
    ) 
/*
<CVSection 
    title={professionalExperience.sectionTitle}
    contents={professionalExperience}
    contents2={professionalExperience2}
/>*/
}

function CVHeading({ firstName, lastName, email, phone, location }) { // Add props for name, email, phone, location
    return (
        <div className="heading">
            <h1 className="name">{`${firstName} ${lastName}`}</h1>
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

function CVSection({ title, contents, contents2 }) { 
    return (
        <div className="section">
            <h2>{title}</h2>
            <InformationPiece 
                date={contents.date}
                location={contents.location}
                title={contents.title}
                info={contents.info}
            />
            {contents2 ? 
            <InformationPiece 
                date={contents2.date}
                location={contents2.location}
                title={contents2.title}
                info={contents2.info}
            /> : null}
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