import {useRef,useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from 'axios';



export default function Signin() {

  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const isValid=()=>{
    let doProceed=true;
    let errorMessage = "Please enter proper details"
    if((email===null || email==="") &&(username===null || username==="") && (password===null || password==="")){
      doProceed=false;
    }
    if(!doProceed) toast.warning(errorMessage)
    else{
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
        
      }else{
          doproceed = false;
          toast.warning('Please enter the valid email')
      }
        }
    return doProceed;
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let userData={email,username,password}
    if(isValid()){
    fetch("http://localhost:8000/user",{
      method: "POST",
      headers: { 'content-type': 'application/json','Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*' },
       body: JSON.stringify(userData),
    })
    .then((res)=>{
      console.log(res.data)
      toast.success("Sign in successful")
      navigate("/login")
    })
    .catch(err=>{
      console.log(err);
      toast.error("Failed : ",err.message)
    })
    }
    

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

