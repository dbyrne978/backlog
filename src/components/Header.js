import React from 'react'

const Header = ( { username } ) => {
  if (username) {
    return <h1>{username}&apos;s BackLog</h1>
  } else {
    return <h1>Welcome to the BackLog App</h1>
  }
}

export default Header