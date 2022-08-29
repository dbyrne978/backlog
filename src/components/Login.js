import React from 'react'
import { useState } from 'react'
import loginService from '../services/login'
import LoginMsg from './LoginMsg'

const Login = ( { username, setUsername, password, setPassword, setUser } ) => {
  const [loginMsg, setLoginMsg] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setLoginMsg('Username or password is incorrect')
      setTimeout(() => {
        'Service timeout'
      }, 5000)
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
      <LoginMsg loginMsg={loginMsg} />
    </>
  )
}

export default Login