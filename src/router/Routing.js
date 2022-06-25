import { Routes, Route } from "react-router-dom";

import FormLogin from "./../pages/FormLogin";
import Register from "./../pages/Register";
import HeaderMain from "./../pages/Header/HeaderMain";
import HeaderTop from "./../pages/Header/HeaderTop";
import Footer from "../pages/Footer/Footer";
import Product from "./../pages/Product/Product";
import Detail from "../pages/detail/DetailProduct";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Bootstrap from "../Bootstrap";
import HomePage from "../pages/HomePage";


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/Product" element={<Product />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/HeaderMain" element={<HeaderMain />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/:slug/:id" element={<Detail />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Bootstrap" element={<Bootstrap />} />
        <Route path="/HeaderTop" element={<HeaderTop />} />
      </Routes>
    </div>
  );
};

export default Routing;
