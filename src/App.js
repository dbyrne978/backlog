import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import BacklogItemAdder from './components/BacklogItemAdder'
import Footer from './components/Footer'
import BacklogItemElementContainer from './components/BacklogItemElementContainer'
import Login from './components/Login'
import backlogItemService from './services/backlogItems'

const App = () => {
  // states
  const [backlogItems, setBacklogItems] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  user

  // axios gets on initial load
  useEffect(() => {
    backlogItemService
      .getAll()
      .then(initialBacklogItems => {
        setBacklogItems(initialBacklogItems)
      })
  }, [])

  //
  return (
    <div className='App'>
      <Header username={user.username} />
      <Login
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setUser={setUser}
      />
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
