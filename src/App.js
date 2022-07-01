import React from 'react';
import { useState, useEffect } from "react"
import axios from 'axios'
import Header from './components/Header'
import NewItemAdder from './components/NewItemAdder'
import Footer from './components/Footer'
import MediaEleContainer from './components/MediaEleContainer'
import mediaObjService from './services/mediaObjArr'

const App = () => {
  // states
  const [mediaObjArr, setMediaObjArr] = useState([])
  const [userData, setUserData] = useState({})

  // axios gets on initial load
  useEffect(() => {
    mediaObjService
      .getAll()
      .then(initialMediaObjArr => {
        setMediaObjArr(initialMediaObjArr)
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
  return (
    <div className="App">
      <Header userName={userData.userName} />
      <MediaEleContainer
        mediaObjArr={mediaObjArr}
        setMediaObjArr={setMediaObjArr}
      />
      <NewItemAdder
        mediaObjArr={mediaObjArr}
        setMediaObjArr={setMediaObjArr}
      />
      <br/><br/>
      <Footer />
    </div>
  );
}

export default App;
