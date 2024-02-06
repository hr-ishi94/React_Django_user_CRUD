import React from 'react'

const AddUser = () => {
  return (
    <div className="form-container">
    <form className="add-user-form" >
        <h2>Add New User Here</h2>
        <div className="input-container">
            <label htmlFor="username">Username</label>
                <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
           
            />
        </div>
        <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            
            />
        </div>
        <div className="input-container">
            <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          
        />
      </div>
      <div className="button-container">
        <input className="add-user-button" type="submit" value="Add User" />
      </div>
    </form>
  </div>
   )
}

export default AddUser