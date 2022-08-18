import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import BacklogItemAdder from './components/BacklogItemAdder'
import Footer from './components/Footer'
import BacklogItemElementContainer from './components/BacklogItemElementContainer'
import backlogItemService from './services/backlogItems'

const App = () => {
  // states
  const [backlogItems, setBacklogItems] = useState([])
  const [userData, setUserData] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // axios gets on initial load
  useEffect(() => {
    backlogItemService
      .getAll()
      .then(initialBacklogItems => {
        setBacklogItems(initialBacklogItems)
      })
  }, [])

  useEffect(() => {
    axios
      .get('/api/userData')
      .then(response => {
        setUserData(response.data)
      })
  }, [])

  //
  const handleLogin = (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
  }

  //
  return (
    <div className='App'>
      <Header userName={userData.userName} />
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
      <BacklogItemElementContainer
        backlogItems={backlogItems}
        setBacklogItems={setBacklogItems}
      />
      <BacklogItemAdder
        backlogItems={backlogItems}
        setBacklogItems={setBacklogItems}
      />
      <br/><br/>
      <Footer />
    </div>
  )
}

export default App
