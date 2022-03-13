import logo from "./logo.png";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="Dictionary-logo" alt="Dictionary-logo" />
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer>Open-source code by Andréanne Marineau</footer>
      </div>
    </div>
  );
}

export default App;
