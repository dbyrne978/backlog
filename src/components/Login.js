import React from 'react'
import loginService from '../services/login'

const Login = ( { username, setUsername, password, setPassword, setUser } ) => {
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
      //setErrorMessage('Wrong credentials')
      console.log('error - wrong credentials')
      setTimeout(() => {
        //setErrorMessage(null)
        console.log('error - timeout')
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
    </>
  )
}

export default Login