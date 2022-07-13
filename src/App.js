import './App.css';
import  Header from "./components/header/header"
import  About from "./components/about/about"
import  Contact from "./components/contact/contact"
import  Experience from "./components/experience/experience"
import  Nav from "./components/nav/Nav"
import Projects from './components/projects/projects';
import  Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
