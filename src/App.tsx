import './App.css';
import '/public/css/style.css';
import '/public/css/elegant-icons.css';
import '/public/css/nice-select.css';
import '/public/css/themify-icons.css';
import '/public/css/slicknav.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import Product from './components/shop/product';
import AboutUs from './components/about-us';
import Solutions from './components/solutions';
import Register from './components/auth/register';
import Login from './components/auth/login';
import { CartProvider } from './contexts/CartContext';
import CompareProduct from './components/shop/compare-product';
import ShoppingCart from './components/shop/shopping-cart';
import Checkout from './components/shop/check-out';
import AuthGuard from './components/auth/auth-guard';
import AdminDashboard from './components/admin';
import AdminProducts from './components/admin/products';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          {/* public routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route element={<AuthGuard />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="products" element={<AdminProducts />} />
              <Route path="users" element={<AdminProducts />} />
              <Route path="orders" element={<AdminProducts />} />
            </Route>
          </Route>
          <Route path="/compare/:id" element={<CompareProduct />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
