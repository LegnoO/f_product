import React from "react";
// import "../assets/bg.css";
import Header from "../pages/Header/Header";
import Wallpaper from "../pages/Wallpaper/Wallpaper";
import Nav from "../pages/Nav/Nav";
// import Footer from "../components/Footer/Footer";
// import Contact from "../components/Contact/Contact";
// import Product from "../components/Product/Product";
// import Detail from "../components/detail/DetailProduct";

const HomePage = () => {
  // const info = localStorage.getItem("userInfo");
  // const name = info ? JSON.parse(info) : null;
  // console.log(name);

  return (
    <div>
      <Header />
      <Nav />
      <Wallpaper />
    </div>
  );
};

export default HomePage;
