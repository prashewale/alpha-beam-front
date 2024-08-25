import "./App.css";
import "/public/css/style.css";
import "/public/css/elegant-icons.css";
import "/public/css/nice-select.css";
import "/public/css/themify-icons.css";
import "/public/css/slicknav.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Shop from "./components/shop";
import Product from "./components/shop/product";
import AboutUs from "./components/about-us";
import Solutions from "./components/solutions";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import AuthProvider from "./contexts/AuthProvider";
import { CartProvider } from "./contexts/CartContext";
import CompareProduct from "./components/shop/compare-product";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
              {/* public routes */}
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Shop />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/compare/:id" element={<CompareProduct />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
