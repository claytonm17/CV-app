import { useState } from 'react'
import '../src/styles/personalInformationForm.css'

function personalInformationForm() {
  return (
    <div className='personalInformationForm'>
      <h2>Personal Information:</h2>
      <form action="GET">
        <div className="nameRow">
          <input 
            type="text" 
            id = 'firstName'
            placeholder='First name'
            minLength={2}
            maxLength={20}
          />
          <input 
            type="text" 
            id = 'lastName'
            placeholder='Last name'
            minLength={2}
            maxLength={20}
          />
        </div>
        <div className="row">
          <label htmlFor="email">
            Email:
          </label>
          <input 
            type="text"
            id = 'email'
            placeholder='John.Doe@email.com'
            minLength={5}
            maxLength={100}
          />
        </div>
        <div className="row">
          <label htmlFor="email">
            Phone Number:
          </label>
          <input 
            type="text" 
            placeholder='(555)-555-5555'
            minLength={10}
          />
        </div>
      </form>
    </div>
  )
}

export default personalInformationForm;
