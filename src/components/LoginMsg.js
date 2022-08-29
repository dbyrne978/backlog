import React from 'react'

const LoginMsg = ( { loginMsg } ) => {
  if (loginMsg === 'Username or password is incorrect') {
    return <div className='login-msg-failure'>{loginMsg}</div>
  }
  return <></>
}

export default LoginMsg