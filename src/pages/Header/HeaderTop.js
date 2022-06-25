import "../../assets/header.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { auth } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";

const HeaderTop = () => {
  const userdata = auth.getUser();
  const navigate = useNavigate();

  const LogoutIcon = async () => {
    await auth.logout();
    navigate("/login");
  };
  
  return (
    <div className="" style={{ backgroundColor: "#ee2624" }}>
      <div className="d-flex container">
        <div className="d-flex me-auto text-white" style={{ fontSize: "13px" }}>
          <span className="p-1 ">Kênh người bán</span>
          <span className="p-1 mx-2">Tải ứng dụng</span>
          <span className="p-1">Kết nối</span>
        </div>
        {userdata ? (
          <div className="text-white p-1">
            <AiFillCheckCircle
              className="mb-1 ms-4 fs-6"
              onClick={() => {
                LogoutIcon();
              }}
            />
            <span className="fs-6 ms-1">{userdata.data.name}</span>
          </div>
        ) : (
          <div
            className="d-flex ms-auto header-login "
            style={{ fontSize: "13px" }}
          >
            <Link to="/" className="p-1 text-white text-decoration-none">
              <span>Đăng ký</span>
            </Link>
            <Link to="/login" className="p-1 text-white text-decoration-none">
              <span>Đăng nhập</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderTop;
