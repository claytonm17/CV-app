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

    return (
        <>
            <CV data={formData} />
            <PersonalInfoForm onFormDataChange={handleFormChange} />
        </>
    )
}

export default App;