import { useState } from 'react'
import '../src/styles/education.css'

function educationInformation() {
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