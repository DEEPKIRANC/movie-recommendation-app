import React from 'react'
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
            <h3 style={{color:"var(--primary-text-color"}}>Error 404 -The Page you are looking for doesn't exist .
             This could be a case of bad(invalid) route.</h3>
           <Link style={{color:"var(--primary-text-color"}} to="/">Go Back to Home</Link>
        </div>
    )
}

export default ErrorPage
