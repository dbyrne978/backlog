const App = () => {
  const userName = "Dan"
  const defaultCards = [
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

  return (
    <div className="App">
      <Header userName={userName} />
      <MediaCard {...defaultCards[0]} />
      <MediaCard {...defaultCards[1]} />
      <MediaCard {...defaultCards[2]} />
      <MediaCard {...defaultCards[3]} />
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

const MediaCard = (props) => {
  return (
    <>
      <p>{props.title} ({props.mediaType})</p>
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
