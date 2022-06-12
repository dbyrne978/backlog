const App = () => {
  return (
    <div className="App">
      <Header />
      <MediaCard number="1" />
      <MediaCard number="2" />
      <MediaCard number="3" />
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
      <p>dummy media card {props.number}</p>
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
