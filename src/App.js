import './App.css';
import Career from './components/Career/Career';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar />
        <Career />
        <Skills />
        <Works />
      </div>
    </div>
  );
}

export default App;
