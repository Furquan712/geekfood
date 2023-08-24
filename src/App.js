import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Product from './pages/Product';
import About from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Resturant from './pages/Restaurant';

function App() {
  return (
   <>
     <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/quote' element={<Quote />} />
      <Route path='/restaurant' element={<Resturant />} />
      <Route path='/product' element={<Product />} />
      <Route path='/about' element={<About />} />
     </Routes>
   </>
  );
}

export default App;
