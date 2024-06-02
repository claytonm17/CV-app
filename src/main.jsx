import React from 'react'
import ReactDOM from 'react-dom/client'
import Personal from './personalInformationForm.jsx'
import Education from './education.jsx'
import '../src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Personal />
    <Education />
  </React.StrictMode>,
)
