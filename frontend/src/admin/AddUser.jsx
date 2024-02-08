import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate()

    const handleSubmit= async (e) => {
        e.preventDefault()

        const user = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })

        await navigate('/')
    }
  return (
    <div className="regform">
        <div  class='container p-5'>
            <form onSubmit={handleSubmit}>
                <h2>Add new user</h2>
                <br />
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp" value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                
                
                <button type="submit" class="loginbtn">Create user</button>
       

            </form>
            
        </div>
    </div>
   )
}

export default AddUser