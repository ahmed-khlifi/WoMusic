import './App.css';
import Home from './components/Home'
import MusicDetails from './components/MusicDetails'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <>
    <Navbar />
    <AnimatePresence exitBeforeEnter initial={false}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idMusic" element={<MusicDetails />} />
        </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
