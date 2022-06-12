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

  return (
    <div className="App">
      <Header userName={backLog.userName} />
      <MediaCard {...backLog.defaultCards[0]} />
      <MediaCard {...backLog.defaultCards[1]} />
      <MediaCard {...backLog.defaultCards[2]} />
      <MediaCard {...backLog.defaultCards[3]} />
      <NewCardButton />
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

const NewCardButton = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <button onClick={handleClick}>
        ++ Add New Backlog Item ++
      </button>
    </>
  );
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
