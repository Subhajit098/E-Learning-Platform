import {useRef,useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { toast } from "react-toastify";


export default function Signin() {

  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    let userData={email,username,password};
    fetch("http://localhost:8000/user",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(userData)
    })
    .then((res)=>{
      toast.success("Sign in successful")
      navigate("/login")
    })
    .catch(err=>{
      console.log(err);
      toast.error("Failed : ",err.message)
    })
  }

  return (
    <SignForm>
       <h1 className='heading-tag'>Please Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p style={{
            textAlign:"center"
          }}>Username</p>
          <input type="text" required value={username} onChange={e=>setUsername(e.target.value)}/>
        </label>

        <label>
          <p style={{
            textAlign:"center"
          }}>Email</p>
          <input type="email" required onChange={email} 
          onChange={e=>setEmail(e.target.value)}/>
        </label>
        <label>
          <p style={{
            textAlign:"center"
          }}>Password</p>
          <input type="password" required onChange={password} 
          onChange={e=>setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div style={{  textAlign:"center"}}>
        <Link to="/login" >Log in</Link>
        </div>
      </form>
    </SignForm>
  )
}

const SignForm =styled.div`
    position:absolute;
    top:30%;
    left:45%
`;

