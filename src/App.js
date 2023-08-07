import './App.css';
import  Header from "./components/header/header"
import  About from "./components/about/about"
import  Contact from "./components/contact/Contact"
import  Experience from "./components/experience/experience"
import Goals from './components/Goals/Goals';
import  Nav from "./components/nav/Nav"
import Projects from './components/projects/projects';
import  Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Goals/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
