import React from 'react'
//import axios from 'axios';
import API from '../api/api';

export default function InputForm ({setIsOpen}) {

  const[email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignUp, setIsSignUp] = React.useState(false); 
  const [error, setError] = React.useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let endpoint = (isSignUp) ? "singUp" : "login";
    await API.post(`http://localhost:5000/${endpoint}`, { email, password })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsOpen();
    })
    .catch(data => setError(data.response?.data?.error)) 

  }

  return (
    <form className="form" onSubmit={handleOnSubmit}>
        <div className='form-control'>
            <label>Email</label>
            <input type="email" className='input' onChange={(e)=>setEmail(e.target.value)} required></input>
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type="password" className='password' onChange={(e)=>setPassword(e.target.value)} required></input>
        </div>
        <button type="submit">{(isSignUp) ? "Sign Up" : "Login"}</button><br />
        {(error != "") && <h6 className='error'>{error}</h6>} <br />
        <p onClick={()=>setIsSignUp(prev => !prev)}>{(isSignUp) ? "Already have an account?": "Create new account"}</p>
    </form>
  )
}

