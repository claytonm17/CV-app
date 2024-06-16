import { useState } from 'react'
import '../styles/form.css'

function Form() {

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

    return (
        <div className="educationInformationForm">
            <h2>Education Information</h2>
            <form>
                {oneTextInput("College/University:", "univ", "The Ohio State University")}
                {oneTextInput("College/University:", "univ", "The Ohio State University")}
            </form>
        </div>
    )
}

export default Form