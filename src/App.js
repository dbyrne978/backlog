const App = () => {
  const backLog = {
    userName: "Dan",
    mediaCardObjArr: [
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
  }
  const addNewBackLogItem = () => console.log('clicked')

  return (
    <div className="App">
      <Header userName={backLog.userName} />
      <MediaCardContainer {...backLog.mediaCardObjArr}/>
      <Button
        onClick={addNewBackLogItem}
        text='++ Add New Backlog Item ++'
      />
      <br /><br />
      <Footer />
    </div>
  );
}

const Header = ({ userName }) => (
  <>
    <h1>{userName}'s Backlog</h1>
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
