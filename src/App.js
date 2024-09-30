
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';
import { LoginSingup } from './Pages/LoginSingup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Componets/Footer/Footer';
import men_banner from './Componets/Assets/banner_mens.png'
import women_banner from './Componets/Assets/banner_women.png'
import kid_banner from './Componets/Assets/banner_kids.png'
import ShopCategory from './Pages/ShopCatagory';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="woman" />} />
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<product />} />
          <Route path=':productId' element={<product />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/login' element={<LoginSingup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
