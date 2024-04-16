import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from './Header.js';
import {Main} from './Main.js';
import {Footer} from './Footer.js';

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
