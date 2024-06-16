import { useState } from 'react'
import CV from './components/CV'
import Form from './components/PersonalDetails'

function App() {

    const [nameData, setNameData] = useState({ firstName: "John", lastName: "Doe"});

    const handleNameChange = (newNameData) => {
        setNameData(newNameData);
    }

    return (
        <>
            <CV data={nameData} />
            <Form onFormDataChange={handleNameChange} />
        </>
    )
}

export default App;