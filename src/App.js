import logo from './logo.svg';
import './App.css';
import Taupe from "./taupe";
import Time from "./Time";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Taupe/>
          <Time time={10} timeToStop={Taupe}/>
      </header>
    </div>
  );
}

export default App;
