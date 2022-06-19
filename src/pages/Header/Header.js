import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
// import "../Header/header.css";
import Wallpaper from "../Wallpaper/Wallpaper";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Header = () => {
  const { isEmpty, totalUniqueItems, emptyCart } = useCart();
  return (
    <header
      className="d-flex"
      style={{ backgroundColor: "#ee2624", color: "#fff" }}
    >
      <div className="container" style={{ padding: "15px 0" }}>
        <div class="row text-center">
          <div class="col-lg-2 d-flex justify-content-center align-items-center ">
            <div className="nav-brand"><i className=" fs-3 fw-bold">SHOP</i></div>
          </div>
          <div class="col-lg">
            <form>
              <div>
                <input
                  className=" p-2 bg-light position-relative   "
                  style={{
                    width: "90%",
                    border: "none",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                  }}
                  placeholder="Tìm kiếm..."
                />
                <span
                  className="text-black position-absolute"
                  style={{
                    right: "370px",
                    top: "20px",
                  }}
                >
                  <AiOutlineSearch />
                </span>
              </div>
            </form>
          </div>
          <div class="col col-lg-2">
            <div className="w-100 fs-4 mb-1">
              <div>
                <Link to="/" className="position-relative">
                  <AiOutlineShoppingCart className="text-white fs-4" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6 bg-white text-black fw-normal">
                    {totalUniqueItems}
                  </span>
                </Link>
                <Link to="/">
                  <AiOutlineUser className="text-white ms-4 fs-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="d-flex justify-content-between w-100 text-center align-items-center">
    //     <ul className="navbar-nav ">
    //       <li>
    //         <a href="#" className="nav-link">
    //           1
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="nav-link">
    //           1
    //         </a>
    //       </li>
    //     </ul>

    //   </div>
    //   <div className="w-100 align-items-center">logo</div>
    //   <div className="icon-nav w-100">
    //     {" "}
    //     <Link to="/" className="position-relative">
    //       <AiOutlineShoppingCart className="icon" />
    //       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    //         {totalUniqueItems}
    //       </span>
    //     </Link>
    //     <Link to="/">
    //       <AiOutlineUser className="icon" />
    //     </Link>
    //     <Link to="/">
    //       <AiOutlineUser className="icon" />
    //     </Link>
    //   </div>
    // </nav>

    // <div>
    //   <section className="header-section">
    //     <div className="nav">
    //       <div className="nav-content">
    //         <div className="nav-menu justify-content-center">
    //           <a>HOME</a>
    //           <a>PRODUCT</a>
    //           <a>ABOUT</a>
    //         </div>
    //         <div className="nav-logo justify-content-center ">
    //           <div>LOGO</div>
    //         </div>

    //         <div className="nav-icon">
    //           <AiOutlineSearch className="icon-search" />

    //           <div className='shopping-cart'>
    //             <AiOutlineShoppingCart className="icon-search " />
    //             <div className='count-cart'>{totalUniqueItems}</div>
    //           </div>

    //           <Link to="/">
    //             <AiOutlineUser className="icon-search" />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Header;
