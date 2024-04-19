import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from './header/Header.js';
import {Main} from './main/Main.js';
import {Footer} from './footer/Footer.js';

function App() {
  return (
    <BrowserRouter className="page-wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
