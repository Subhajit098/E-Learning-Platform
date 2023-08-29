import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";


export default function Login() {
  return (
    <LoginForm>
        <h1 className='heading-tag'>Please Log In</h1>
      <form>
        <label>
          <p style={{
            textAlign:"center"
          }}>Username</p>
          <input type="text" required/>
        </label>
        <label>
          <p style={{
            textAlign:"center"
          }}>Password</p>
          <input type="password" required/>
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
