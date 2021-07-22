import React from "react"
// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
import ProjectPage from "./Components/Projects";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import EmailJSContact from "./Components/EmailJSContact";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();



function App() {
  return (
    <div className="App" class="bg-gray-900">
      <Header />
      <About />
      <ProjectPage />
      <EmailJSContact />
      <Footer/>

      
    </div>
  );
}

export default App;
