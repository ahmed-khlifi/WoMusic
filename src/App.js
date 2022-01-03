import './App.css';
import Home from './components/Home'
import MusicDetails from './components/MusicDetails'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />3
      <Route path="/:idMusic" element={<MusicDetails />} />
    </Routes>
    </>
  );
}

export default App;
