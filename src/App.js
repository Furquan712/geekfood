import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import About from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Resturant from './pages/Restaurant';
import Hotel from './pages/Hotel'
import Food from './pages/Food';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
   <>
     <Navbar />
     <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/quote' element={<Quote />} />
      <Route path='/restaurant' element={<Resturant />} />
      <Route path='/food' element />
      <Route path='/about' element={<About />} />
      <Route path='/hotel' element={<Hotel />} />
     </Routes>
   </>
  );
}

export default App;
