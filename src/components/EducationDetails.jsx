import { useState } from 'react'
import '../styles/form.css'

function Form({ onFormDataChange }) {

    const [formState, setFormState] = useState({ univ: "", startDate: "", endDate: "", location: "", info: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormState = { ...formState, [name]: value };
        setFormState(newFormState);
        onFormDataChange(newFormState);
    };

    const oneTextInput = (label, name, placeholder) => (
        <div className="single-row">
            <label className="input-row" htmlFor="email">
            {label}
                <input 
                    type="text"
                    id = 'input'
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
        
    const twoTextInput = (label1, name1, name2) => (
        <div className="row">
            <label htmlFor="firstName">
                {label1}
                <div className="nameRow">
                    <input 
                        type="text" 
                        id = 'firstName'
                        name = {name1}
                        placeholder='Start date'
                        minLength={2}
                        maxLength={20}
                        value = {formState.name1}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        id = 'lastName'
                        name = {name2}
                        placeholder='End date'
                        minLength={2}
                        maxLength={20}
                        value = {formState.name2}
                        onChange={handleChange}
                    />
                </div>
            </label>
        </div>
    )

    return (
        <div className="educationInformationForm">
            <h2>Education Information</h2>
            <form>
                {oneTextInput("College/University:", "univ", "The Ohio State University")}
                {twoTextInput("Attended:", "start", "end")}
                {oneTextInput("Location:", "location", "Columbus, OH")}
                {oneTextInput("Extra Info:", "info", "Bachelors of Science")}
            </form>
        </div>
    )
}

export default Form