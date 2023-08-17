import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Product from './pages/Product';
import Resturant from './pages/Resturant';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
     <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/quote' element={<Quote />} />
      <Route path='/resturant' element={<Resturant />} />
      <Route path='/product' element={<Product />} />
      <Route path='/about' element={<About />} />
     </Routes>
   </>
  );
}

export default App;
