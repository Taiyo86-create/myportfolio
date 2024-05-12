import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Career from './components/Career/Career';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar />
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Career />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/works' element={<Works />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
