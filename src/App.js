const App = () => {
  const backLog = {
    userName: "Dan",
    defaultCards: [
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
      <MediaCard {...backLog.defaultCards[0]} />
      <MediaCard {...backLog.defaultCards[1]} />
      <MediaCard {...backLog.defaultCards[2]} />
      <MediaCard {...backLog.defaultCards[3]} />
      <Button
        onClick={addNewBackLogItem}
        text='++ Add New Backlog Item ++'
      />
      <br /><br />
      <Footer />
    </div>
  );
}

const Header = (props) => {
  return (
    <>
      <h1>{props.userName}'s Backlog</h1>
    </>
  );
}

const MediaCard = ({ title, mediaType }) => {
  return (
    <>
      <p>{title} ({mediaType})</p>
    </>
  );
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <footer>
        Webpage by:
        <a href="https://dbyrne978.github.io/portfolio/"> Daniel Byrne</a>
      </footer>
    </>
  );
}

export default App;
