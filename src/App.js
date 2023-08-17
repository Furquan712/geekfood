import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Split from './components/split/Split';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
     <Navbar />
     <Banner />
     <Split />
     <Feedback />
     <Footer />
   </>
  );
}

export default App;
