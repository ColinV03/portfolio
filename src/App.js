// import logo from './logo.svg';
import './App.css';
import MiniDrawer from "./Components/Header"
import About from "./Components/About"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiniDrawer></MiniDrawer>
      
      
        <About className="aboutMe" />
      
      </header>

      
    </div>
  );
}

export default App;
