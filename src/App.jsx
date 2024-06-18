import { useState } from 'react'
import CV from './components/CV'
import PersonalInfoForm from './components/PersonalDetails'
import EducationForm from './components/EducationDetails'

function App() {

    const [formData, setFormData] = useState({ 
        // Default Values
        firstName: "Myles", 
        lastName: "Morales",
        email: "Myles.Morales@email.com",
        phone: "+1 (718)-555-5555",
        location: "Brooklyn, NY",
    });

    const handleFormChange = (newFormData) => {
        setFormData(newFormData);
    }

    const [eduFormData, setEduFormData] = useState({
        univ: "The Ohio State University",
        start: "08/2018",
        end: "05/2022",
        location: "Columbus, OH",
        info: "Bachelors of Science",
    });

    const handleEduFormChange = (newEduFormData) => {
        setEduFormData(newEduFormData)
    }

    return (
        <>
            <CV data={formData} eduData={eduFormData}/>
            <PersonalInfoForm onFormDataChange={handleFormChange} />
            <EducationForm onFormDataChange={handleEduFormChange} />
        </>
    )
}

export default App;