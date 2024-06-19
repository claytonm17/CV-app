import { useState } from 'react'
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
*/

function CV({ data, eduData, proData }) {
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
                title={"Education"}
                univ={eduData.univ}
                start={eduData.start}
                end={eduData.end}
                location={eduData.location}
                info={eduData.info}
            />
            <CVSection 
                title={"Professional Experience"}
                univ={proData.name}
                start={proData.start}
                end={proData.end}
                location={proData.location}
                info={proData.info}
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

function CVSection({ title, univ, start, end, location, info }) { 
    return (
        <div className="section">
            <h2>{title}</h2>
            <InformationPiece 
                date = {`${start} - ${end}`}
                location={location}
                title={univ}
                info={info}
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