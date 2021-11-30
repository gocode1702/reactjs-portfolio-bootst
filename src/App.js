import './App.css';

import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Nav from "./layout/Nav";

import WhoIAm from "./components/whoiam/WhoIAm";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import Footer from "./layout/Footer";


function App() {

  return (
    <div className="App">
      <header className="App-header bg-dark text-center">
        <div class="row">
          <div class="col-8"><Header/></div>
          <div class="col-4"><Nav/></div>
        </div>
      </header>
      <div id="background" className="d-flex justify-content-center align-items-center text-white">
        <h2>Développeur Web</h2>
      </div>
      <main className="container my-5">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/whoiam" element={<WhoIAm />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
