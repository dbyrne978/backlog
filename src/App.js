import React from 'react';
import { useState, useEffect } from "react"
import axios from 'axios'
import Header from './components/Header'
import NewItemAdder from './components/NewItemAdder'
import Footer from './components/Footer'
import MediaEleContainer from './components/MediaEleContainer'

const App = () => {
  // states
  const [mediaObjArr, setMediaObjArr] = useState([])
  const [userData, setUserData] = useState({})

  // axios gets on initial load
  useEffect(() => {
    axios
      .get('http://localhost:3001/mediaObjArr')
      .then(response => {
        setMediaObjArr(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:3001/userData')
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
