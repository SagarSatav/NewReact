import React from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'

export const Contact = () => {
  const navigate=useNavigate()
  return (
    <>
    <div>Contact</div>
    <Link to={'insta'}><h3>contact via insta</h3></Link>
    <Link to={'facebook'}><h3>contact via facebook</h3></Link>
    <Outlet />
    <button onClick={()=>navigate('/')}>Go back</button>
    </>
  )
}
