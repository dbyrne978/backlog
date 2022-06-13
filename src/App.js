import { useState } from "react";

const App = (props) => {
  const [ stateVars, updateStateVars ] = useState({
    mediaCardObjArr: props.mediaCardObjArr,
    idCounter: props.idCounter
  })
  
  const addNewMediaCard = () => {
    const newMediaCard = {
      id: stateVars.idCounter,
      title: "test title",
      mediaType: "test mediaType"
    }
    updateStateVars(
      {
        mediaCardObjArr: [...stateVars.mediaCardObjArr, newMediaCard],
        idCounter: stateVars.idCounter + 1
      }
    )
  }

  return (
    <div className="App">
      <Header userName={props.userName} />
      <MediaCardContainer {...stateVars.mediaCardObjArr}/>
      <Button
        onClick={addNewMediaCard}
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

const MediaCardContainer = (props) => {
  const mediaCardObjArr = Object.values(props);
  const mapObjToElement = mediaCardObj => (<MediaCard {...mediaCardObj} />)
  const mediaCardElements = mediaCardObjArr.map(mapObjToElement)

  return (
    <ul className="MediaCardContainer" key="MediaCardContainer">
      {mediaCardElements}
    </ul>
  )
}

const MediaCard = ({ id, title, mediaType }) => {
  return(
  <li key={id}>
    {title} ({mediaType})
  </li>
)}

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
