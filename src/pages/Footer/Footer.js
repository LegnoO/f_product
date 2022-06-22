import React from "react";
import { AiFillSketchCircle } from "react-icons/ai";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <footer className="mt-5">
      <section>
        <div className="container bg-light">
          <div className="d-flex justify-content-between pt-5 mb-3">
            <div className="footer-item" style={{ fontSize: "12px" }}>
              <p className="text-uppercase fw-bold">Về chúng tôi</p>
              <div style={{ color: "#6f787e" }}>
                <p>Giới thiệu ...</p>
                <p>Giới thiệu SenMail</p>
                <p>Quy chế hoạt động</p>
              </div>
            </div>

            <div className="footer-item" style={{ fontSize: "12px" }}>
              <p className="text-uppercase fw-bold">Về chúng tôi</p>
              <div style={{ color: "#6f787e" }}>
                <p>Giới thiệu ...</p>
                <p>Giới thiệu SenMail</p>
                <p>Quy chế hoạt động</p>
              </div>
            </div>

            <div className="footer-item" style={{ fontSize: "12px" }}>
              <p className="text-uppercase fw-bold">Về chúng tôi</p>
              <div style={{ color: "#6f787e" }}>
                <p>Giới thiệu ...</p>
                <p>Giới thiệu SenMail</p>
                <p>Quy chế hoạt động</p>
              </div>
            </div>

            <div className="footer-item" style={{ fontSize: "12px" }}>
              <p className="text-uppercase fw-bold">Về chúng tôi</p>
              <div style={{ color: "#6f787e" }}>
                <p>Giới thiệu ...</p>
                <p>Giới thiệu SenMail</p>
                <p>Quy chế hoạt động</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:{" "}
          <a className="text-reset fw-bold">MDBootstrap.com</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
