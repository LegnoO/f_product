import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
  AiFillCheckCircle,
} from "react-icons/ai";
import { auth } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

import HeaderTop from "../Header/HeaderTop";

const Header = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();
  const userdata = auth.getUser();
  const navigate = useNavigate();

  return (
    <>
      <HeaderTop />
      <header
        className="d-flex"
        style={{ backgroundColor: "#ee2624", color: "#fff" }}
      >
        <div className="w-100">
          <div className="container" style={{ padding: "20px 0" }}>
            <div className="row text-center">
              <div className="col-lg-2 d-flex justify-content-center align-items-center ">
                <Link to="/product" className="text-white text-decoration-none">
                  <div className="nav-brand">
                    <i className=" fs-3 fw-bold">SHOP</i>
                  </div>
                </Link>
              </div>
              <div className="col-lg">
                <form>
                  <div>
                    <input
                      className="p-2 ps-4 bg-light position-relative"
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
                        right: "360px",
                        top: "56px",
                      }}
                    >
                      <AiOutlineSearch />
                    </span>
                  </div>
                </form>
              </div>
              {userdata ? (
                <div className="col-lg-2">
                  <div className="fs-4">
                    <Link to="/cart" className="position-relative">
                      <AiOutlineShoppingCart className="text-white fs-3" />
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-black fw-normal"
                        style={{ fontSize: "11px" }}
                      >
                        {totalUniqueItems}
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="col-lg-2">
                  <div className="fs-4">
                    <Link to="/cart" className="position-relative">
                      <AiOutlineShoppingCart className="text-white fs-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
