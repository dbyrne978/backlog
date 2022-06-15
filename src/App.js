import React from 'react';
import { useState } from "react"
import Header from './components/Header'
import NewItemAdder from './components/NewItemAdder'
import Footer from './components/Footer'
import MediaEleContainer from './components/MediaEleContainer'

const App = (props) => {
  const [stateVars, setStateVars] = useState({
    mediaObjArr: props.mediaObjArr,
    idCounter: props.idCounter
  })

  return (
    <div className="App">
      <Header userName={props.userName} />
      <MediaEleContainer {...stateVars.mediaObjArr}/>
      <NewItemAdder
        stateVars={stateVars}
        setStateVars={setStateVars}
      />
      <br/><br/>
      <Footer />
    </div>
  );
}

export default App;
