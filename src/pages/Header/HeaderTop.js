import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { auth } from "../../services/authService";
// import "../Header/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Header = () => {
  const { totalUniqueItems } = useCart();
  const userdata = auth.getToken()
  console.log("header", userdata);
  const navigate = useNavigate();
  if (userdata) {
    console.log("true");
  } else {
    console.log("false");
  }
  const LogoutIcon = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <header
      className="d-flex"
      style={{ backgroundColor: "#ee2624", color: "#fff" }}
    >
      <div className="w-100">
        <div className="container" style={{ padding: "20px 0" }}>
          <div className="row text-center">
            <div className="col-lg-2 d-flex justify-content-center align-items-center ">
              <div className="nav-brand">
                <i className=" fs-3 fw-bold">SHOP</i>
              </div>
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
                      right: "350px",
                      top: "28px",
                    }}
                  >
                    <AiOutlineSearch />
                  </span>
                </div>
              </form>
            </div>
            <div className="col col-lg-2">
              <div className="w-100 fs-4 mb-1">
                <div>
                  <Link to="/cart" className="position-relative">
                    <AiOutlineShoppingCart className="text-white fs-4" />
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-black fw-normal"
                      style={{ fontSize: "12px" }}
                    >
                      {totalUniqueItems}
                    </span>
                  </Link>
                  <Link to="/">
                    <AiOutlineUser className="text-white ms-4 fs-4" />
                  </Link>

                  {userdata ? (
                    <AiFillCheckCircle
                      className="text-white ms-4 fs-4"
                      onClick={() => {
                        LogoutIcon();
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
