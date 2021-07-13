import "./App.css";
import Dictionary from "./Dictionary";
import DateF from "./DateF";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
        <div className="main">
          <DateF />
          <Dictionary />
        </div>
      </div>
    </div>
  );
}

export default App;
