import { useState } from 'react'
import CV from './components/CV'
import Form from './components/PersonalDetails'

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
            <Form onFormDataChange={handleFormChange} />
        </>
    )
}

export default App;