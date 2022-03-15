import logo from './logo.svg';
import './App.css';
import router, { routes, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Services from './components/services';
import Contact from './components/contact';
import SignIn from './components/signin';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Devasya() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route> 
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default Devasya;
