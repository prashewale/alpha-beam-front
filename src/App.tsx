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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
