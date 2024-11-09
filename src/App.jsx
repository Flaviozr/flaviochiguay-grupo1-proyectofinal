import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Products from './components/Products/Products'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ItemList from './components/ItemList/ItemList';

function App() {
 return (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/products' element={<Products />} />
        <Route path="/productos" element={<ItemList />} />
        <Route path="/products/:productId" element={<ItemDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App