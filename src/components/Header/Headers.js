import React  from 'react'

import "./Header.css"
import { Link } from 'react-router-dom';
import user from "../../images/user.png"


 const Headers = () => {



 

  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'>Movie app</div> 
      </Link>

      <div className='user-image'>
        <img src={user}  alt="user"/> 
      </div>
    </div>
  )
}
export default Headers;