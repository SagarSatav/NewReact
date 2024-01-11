import React from 'react'
import { NavLink } from 'react-router-dom';
// import FormData from './FormData'
const Form = () => {
    return (
        <div>
            <NavLink to={'form'}><h2 style={{ cursor: "pointer" }}>Form</h2></NavLink>
            
            {/* <Link to={'form'}> <h2 style={{cursor:'pointer'}}>Form</h2> </Link>
             */}
            {/* <FormData /> */}
        </div>
    )
}

export default Form