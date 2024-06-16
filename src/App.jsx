import { useState } from 'react'
import CV from './components/CV'
import Form from './components/PersonalDetails'

function App() {

    const [formData, setFormData] = useState({ 
        firstName: "John", 
        lastName: "Doe",
        email: "John.Doe@email.com",
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