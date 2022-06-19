import React from "react";
import { AiFillSketchCircle } from "react-icons/ai";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section
        className="container-fluid d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <div className="ms-3">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
      </section>
      <section>
        <div className="container-fluid mt-5 bg-light">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <AiFillSketchCircle className="me-2" />
                GEARVN
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">PRODUCTS</h6>
              <p>
                <a className="text-reset">Angular</a>
              </p>
              <p>
                <a className="text-reset">React</a>
              </p>
              <p>
                <a className="text-reset">Vue</a>
              </p>
              <p>
                <a className="text-reset">Lavarel</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Chi nhánh</h6>
              <p>
                <a className="text-reset">
                  Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.
                </a>
              </p>
              <p>
                <a className="text-reset">
                  Địa chỉ 2: 905 Kha Vạn Cân, Phường Linh Tây, Thành phố Thủ
                  Đức.
                </a>
              </p>
              <p>
                <a className="text-reset">
                  {" "}
                  Địa chỉ : 37 Ngõ 121 Thái Hà, Phường Trung Liệt, Quận Đống Đa
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên lạc</h6>
              <p>
                <AiFillSketchCircle className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <AiFillSketchCircle className="me-2" />
                info@example.com
              </p>
              <p>
                <AiFillSketchCircle className="me-2" />+ 01 234 567 88
              </p>
              <p>
                <AiFillSketchCircle className="me-2" />+ 01 234 567 89
              </p>
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
