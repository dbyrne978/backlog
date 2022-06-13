import { useState } from "react"
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'
import MediaEleContainer from './components/MediaEleContainer'

const App = (props) => {
  const [ stateVars, updateStateVars ] = useState({
    mediaObjArr: props.mediaObjArr,
    idCounter: props.idCounter
  })
  
  const addNewMediaObj = () => {
    const newMediaObj = {
      id: stateVars.idCounter,
      title: "test title",
      mediaType: "test mediaType"
    }
    updateStateVars(
      {
        mediaObjArr: [...stateVars.mediaObjArr, newMediaObj],
        idCounter: stateVars.idCounter + 1
      }
    )
  }

  return (
    <div className="App">
      <Header userName={props.userName} />
      <MediaEleContainer {...stateVars.mediaObjArr}/>
      <Button
        onClick={addNewMediaObj}
        text='++ Add New BackLog Item ++'
      />
      <br /><br />
      <Footer />
    </div>
  );
}

export default App;
