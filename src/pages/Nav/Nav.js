import React from "react";

const Nav = () => {
  return (
    <div>
      <ul
        className="nav d-flex justify-content-center text-center"
        style={{ backgroundColor: "#ee2624" }}
      >
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page">
            Trang chủ
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Giới thiệu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Sản phẩm</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Tin tức</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Liên hệ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Hệ thống</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Tuyển dụng</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
