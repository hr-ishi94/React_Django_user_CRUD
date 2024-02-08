import React from 'react'
import './Signup.css'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    
    const signupSubmit= (e) =>{
        e.preventDefault()
        console.log('hello')
        
        // if (password!==password1){
        //     alert("Passwords didn't match!")
        //     navigate('/register')
        // }
        const response= fetch('http://localhost:8000/api/register/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username,
                email,
                password
            })
        })
        console.log(response)
        if(response.status===400){
            alert('Enter some details')
            navigate('/register')

        }else{
            navigate('/login')
        }
        

    }

  return (
    <div className="regform">
        <div  class='container p-5'>
            <form onSubmit={signupSubmit}>
                <h2>Register for free!</h2>
                <br />
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" name="password2" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword1(e.target.value)}/>
                </div>
                
                <button type="submit" class="loginbtn">Signup</button>
       

            </form>
            <br/>
            <p>Already have an account?</p>
            <h6><Link to='/login'>Login</Link></h6>
            <br/>
     
        </div>
    </div>
  )
}

export default Signup