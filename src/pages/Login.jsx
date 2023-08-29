import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { toast } from "react-toastify";


export default function Login() {
  const navigate=useNavigate()
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch("http://localhost:8000/user/"+username,{
      headers: { 'content-type': 'application/json','Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*' }
    })
    .then((res)=>{
      return res.json()
    })
    .then((result)=>{
      console.log(result);
      if(Object.keys(result).length===0){
        toast.error("Please enter valid user credentials")
      }
      else{
        if(result.password===password){
          toast.success("Login Successful")
          navigate("/")
        }
        else{
          toast.error("Please enter valid password")
        }
      }
    })
    .catch((err)=>{
      console.log(err)
      toast.error("Login failed due to : ",err.message)
    })
  }

  return (
    <LoginForm>
        <h1 className='heading-tag'>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p style={{
            textAlign:"center"
          }}>Username</p>
          <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </label>
        <label>
          <p style={{
            textAlign:"center"
          }}>Password</p>
          <input type="password" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <div style={{  textAlign:"center", }}>
          <button type="submit">Submit</button>
        </div>
        <div style={{  textAlign:"center"}}>
        <Link to="/signin" >Sign in</Link>
        </div>
      </form>
    </LoginForm>
  )
}

const LoginForm =styled.div`
    position:absolute;
    top:30%;
    left:45%
`;
