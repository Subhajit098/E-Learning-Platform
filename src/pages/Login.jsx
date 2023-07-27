import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div>
        <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <Link to="/signin">Sign in</Link>
      </form>
    </div>
  )
}
