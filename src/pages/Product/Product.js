import React, { useEffect, useCallback } from "react";
import "../Product/product.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../features/productSlice";

import Header from "../Header/HeaderMain";
import Nav from "../Header/Nav";
import Footer from "../Footer/Footer";
import Wallpaper from "../Wallpaper/Wallpaper";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.product);

  const getList = useCallback(async () => {
    try {
      await dispatch(getProductList());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    getList();
  }, [dispatch]);

  const RenderItem = () => {
    if (data.length) {
      return data.map((item, index) => (
        <div className="col-lg-3 col-md-3 col-sm-3 mb-4" key={index}>
          <Link
            className="text-decoration-none"
            to={`/${item.slug}/${item.id}`}
          >
            <div
              className="product-item card text-black p-1"
              style={{ borderRadius: "5px" }}
            >
              <img src={item.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text overflow-hidden">{item.name}</p>
                <p className="text-muted text-center mb-4">ABC</p>
                <div />
                <div className="text-center font-weight-bold mt-4">
                  <span className="fs-5" style={{ color: "#ee4d2d" }}>
                    {item.price}.000 đ
                  </span>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button className="btn-add-cart btn btn-danger">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ));
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <Wallpaper />
      <section>
        <div className="container py-3">
          <h5 className="my-4 fs-3" style={{ color: "#ee4d2d" }}>
            Sản phẩm
          </h5>
          <div className="row">{RenderItem()}</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;

// const DeleteItem = (index) => {
//   const newData = [...data];
//   newData.splice(index, 1);
//   setData(newData);
// };
