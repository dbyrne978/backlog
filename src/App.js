import { useState } from "react";

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

const Header = ({ userName }) => (
  <>
    <h1>{userName}'s BackLog</h1>
  </>
)

const MediaEleContainer = (props) => {
  const mediaObjArr = Object.values(props)

  return (
    <ul className="media-ele-container">
      {mediaObjArr.map(mediaObj =>
        <MediaEle key={mediaObj.id} mediaObj={mediaObj} />
      )}
    </ul>
  )
}

const MediaEle = ({ mediaObj }) => (
  <li className="media-ele">
    {mediaObj.title} ({mediaObj.mediaType})
  </li>
)

const Button = ({ onClick, text }) => (
  <>
    <button onClick={onClick}>
      {text}
    </button>
  </>
)

const Footer = () => (
  <>
    <footer>
      Webpage by:
      <a href="https://dbyrne978.github.io/portfolio/"> Daniel Byrne</a>
    </footer>
  </>
)

export default App;
