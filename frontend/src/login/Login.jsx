import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='logindiv '>

      <div class="container p-5">
        <h1>Login page</h1>
        <br/>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" className='inputsize'class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
           
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="loginbtn">Login</button>
       

        </form>
        <br/>
        <p>Don't have an account?</p>
        <h5>Register Free here!</h5>
      </div>
    </div>
  )
}

export default Login