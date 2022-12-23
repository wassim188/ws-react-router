import React from 'react'
import {Link, link} from "react-router-dom"
function ErrorPage() {
  return (
    <div className='Error-page'>
      <h1>This Page Is Note Found</h1>
      <button>
        <Link to="/home" >Go Home</Link>
      </button>
       
    </div>
  )
}

export default ErrorPage
