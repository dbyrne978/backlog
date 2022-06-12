const App = () => {
  const defaultCard1 = {
    title: "13 Sentinels",
    mediaType: "Video Game"
  }
  const defaultCard2 = {
    title: "Buffy: the Vampire Slayer",
    mediaType: "TV Show"
  }
  const defaultCard3 = {
    title: "Chronicle",
    mediaType: "Movie"
  }
  const defaultCard4 = {
    title: "Blood of Elves",
    mediaType: "Book"
  }

  return (
    <div className="App">
      <Header />
      <MediaCard {...defaultCard1} />
      <MediaCard {...defaultCard2} />
      <MediaCard {...defaultCard3} />
      <MediaCard {...defaultCard4} />
      <br /><br />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <>
      <h1>Backlog Tracker</h1>
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
