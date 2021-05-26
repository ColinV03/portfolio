// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
import ProjectPage from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"



function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectPage />
      <Contact />
      <Footer/>

      
    </div>
  );
}

export default App;
