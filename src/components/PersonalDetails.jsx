import React, { useState } from 'react'
import '../styles/form.css'

function Form({ onFormDataChange }) {

    const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormState = { ...formState, [name]: value };
        setFormState(newFormState);
        onFormDataChange(newFormState);
    };

    // label: string = text that shows in UI
    // name: string = prop name -- should be same
    // name2: string = prop name -- for second input
    const twoTextInput = (label1, name1, name2) => (
        <div className="row">
            <label htmlFor="firstName">
                {label1}
                <div className="nameRow">
                    <input 
                        type="text" 
                        id = 'firstName'
                        name = {name1}
                        placeholder='First name'
                        minLength={2}
                        maxLength={20}
                        value = {formState.name1}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        id = 'lastName'
                        name = {name2}
                        placeholder='Last name'
                        minLength={2}
                        maxLength={20}
                        value = {formState.name2}
                        onChange={handleChange}
                    />
                </div>
            </label>
        </div>
    )

    // label: string = text that shows in UI
    // name: string = prop name -- should be same
    const oneTextInput = (label, name, placeholder) => (
        <div className="single-row">
            <label className="input-row" htmlFor="email">
            {label}
                <input 
                    type="text"
                    id = 'email'
                    name = {name}
                    placeholder={placeholder}
                    minLength={5}
                    maxLength={100}
                    value={formState.name}
                    onChange={handleChange}
                />
            </label>
        </div>
    )

    return (
        <div className='personalInformationForm'>
            <h2>Personal Information</h2>
            <form>
                {twoTextInput("Name:", "firstName", "lastName")}
                {oneTextInput("Email:", "email", "Myles.Morales@email.com")}
                {oneTextInput("Phone:", "phone", "+1 (718)-555-5555")}
                {oneTextInput("Location:", "location", "Brooklyn, NY")}
            </form>
        </div>
    )
}

export default Form