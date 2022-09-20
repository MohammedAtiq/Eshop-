
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {
  Routes,
  Route,
} from "react-router-dom";
// import SlideImage from './Components/SlideImage';
import Footer from './Components/Footer';
import ShopCart from './Components/ShopCart';
import MainPage from './Components/MainPage';
import Contact from './Components/Contact';
import LogIn from './Components/LogIn';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ShopCart" element={<ShopCart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
