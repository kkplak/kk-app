import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <Router>
      <main className='text-gray-400 bg-zinc-900 body-font'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>

      <Footer/>
      </main>
    </Router>
  );
}

export default App;
