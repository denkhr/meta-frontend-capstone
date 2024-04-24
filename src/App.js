import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Main } from './Main.js';

const Nav = () => {
  return (
    <nav>
      <ul className="nav_list">
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <div className="h-flex">
      <img src='/logo.jpg' alt="Little Lemon logo"></img>
      <Nav />
    </div>)
}

const Footer = () => {
  return (
    <footer>
      2024 Denis Khramov
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter className="page-wrapper">
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
