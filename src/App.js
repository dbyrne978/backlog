import { useState } from "react";

const App = () => {
  const userName = "Dan"
  const defaultBackLog = [
      {
        title: "13 Sentinels",
        mediaType: "Video Game"
      },
      {
        title: "Buffy: the Vampire Slayer",
        mediaType: "TV Show"
      },
      {
        title: "Chronicle",
        mediaType: "Movie"
      },
      {
        title: "Blood of Elves",
        mediaType: "Book"
      }
    ]
  
  const [ mediaCardObjArr, updateMediaCardObjArr ] = useState(defaultBackLog)
  const addNewMediaCard = () => {
    const newMediaCard = {
      title: "test title",
      mediaType: "test mediaType"
    }
    updateMediaCardObjArr([...mediaCardObjArr, newMediaCard])
  }

  return (
    <div className="App">
      <Header userName={userName} />
      <MediaCardContainer {...mediaCardObjArr}/>
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
  const mapObjToElement = mediaCardObj => <MediaCard {...mediaCardObj} />
  const mediaCardElements = mediaCardObjArr.map(mapObjToElement)

  return (
    <div className="MediaCardContainer">
      {mediaCardElements}
    </div>
  )
}

const MediaCard = ({ title, mediaType }) => {
  return(
  <>
     <p>{title} ({mediaType})</p>
  </>
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
