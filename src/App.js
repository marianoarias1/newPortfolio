import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { Header } from './components/header/Header';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Projects } from './components/projects/Projects';
import { Knowledge } from './components/knowledge/Knowledge';
import { ContactUs } from './components/contactUs/ContactUs';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Knowledge/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
