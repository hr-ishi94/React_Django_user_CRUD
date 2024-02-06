import React from 'react'
import './Navbar.css'


const Navbar = ({title}) => {
  return (
    <div>
      <nav class="navbar bg-secondary">
        
        <div class="container-fluid">
          <h3 class="text-light m-2 ">USER CRUD PROJECT: {title} </h3>
            <div class="d-flex">
                <a class="navbar-brand">Home</a>
                <a class="navbar-brand">My Profile</a>
                <button className='bttn' >logout</button>
            </div>
        </div>
      </nav>  
    </div>
  )
}

export default Navbar