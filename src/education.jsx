import { useState } from 'react'
import '../src/styles/education.css'

function FormItem1({ label, placeholder, optional }) {
    const props = {
        label:  label,
        placeholder: placeholder,
        optional: optional, 
    }

    return (
        <div className='row'>
            <label htmlFor={label}>
                {label}
                {optional && <small>optional</small>}
                </label>
            <input 
                type="text" 
                id={label}
                placeholder={placeholder}
            />
        </div>
    )
}

FormItem1.defaultProps

function FormItem2({ label, placeholder1, placeholder2 }) {
    return (
        <>
        
        </>
    )
}

function educationInformation() {
    /*
    const formInputs = { 
        // Label: string : 
        // [ multi-input: boolean, 
        // optional-tag: boolean, 
        // placeholder: string, 
        // secondary-placeholder: string **Optional ]
        "School" : [false, false, "Enter School/University"],
        "Degree" : [false, false, "Enter Degree/Field of Study"],
        "Start/End Date:" : [true, false, "Start Date", "End Date"],
        "Extra Information:" : [false, true, "Enter any addional information"],
    }*/

    return (
        <div className="educationForm">
            <h2>Education</h2>
            <form action="GET">


                <div className="row">
                    <label htmlFor="school">
                        School:
                    </label>
                    <input 
                        type="text"
                        id='school'
                        placeholder='Enter School/University'
                     />
                </div>


                <div className="row">
                    <label htmlFor="degree">
                        Degree:
                    </label>
                    <input 
                        type="text"
                        id='degree'
                        placeholder='Enter Degree/Field of Study'
                    />
                </div>
                <div className="row">
                    <label htmlFor="startDate">
                        Start/End Date:
                    </label>
                    <div className="datesRow">
                        <input 
                            type="text" 
                            id = 'startDate'
                            placeholder = 'Start Date'
                        />
                        <input 
                            type="text" 
                            id = 'endDate'
                            placeholder = 'End Date'
                        />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="extra">
                        Extra Information: <small>optional</small>
                    </label>
                    <input 
                        type="text"
                        id='extra'
                        placeholder='Enter any addional information'
                    />
                </div>
            </form>
        </div>
    )
}

export default educationInformation;