import React, { useState } from 'react'
import '../styles/form.css'

function Form({ onFormDataChange }) {

    const [formState, setFormState] = useState({ firstName: "", lastName: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormState = { ...formState, [name]: value };
        setFormState(newFormState);
        onFormDataChange(newFormState);
    };

    return (
        <div className='personalInformationForm'>
            <h2>Personal Information</h2>
            <form>
                <div className="row">
                    <label htmlFor="firstName">
                        Name:
                        <div className="nameRow">
                            <input 
                                type="text" 
                                id = 'firstName'
                                name = "firstName"
                                placeholder='First name'
                                minLength={2}
                                maxLength={20}
                                value = {formState.firstName}
                                onChange={handleChange}
                            />
                            <input 
                                type="text" 
                                id = 'lastName'
                                name = "lastName"
                                placeholder='Last name'
                                minLength={2}
                                maxLength={20}
                                value = {formState.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default Form