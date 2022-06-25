import React, { useState, useEffect } from "react";
import serviceCallAPI from "../../services/ServicesCallAPI";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/authService";
import "./detail.css";

import HeaderMain from "../Header/HeaderMain";
import Footer from "../Footer/Footer";

const DetailProduct = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState();
  let { id } = useParams();

  const GetProductID = async () => {
    const response = await serviceCallAPI(`products/${id}`, "GET");
    console.log("res", response.data.data);
    setProduct(response.data.data);
  };

  useEffect(() => {
    GetProductID();
  }, []);

  const AddItemtoCart = async () => {
    const userdata = auth.getUser();
    if (!userdata) {
      navigate("/login");
    } else {
      const data = {
        id: product.id,
        name: product.name,
        price: product.price,
        avatar: product.avatar,
        detail: product.detail,
        cate_id: product.cate_id,
        checked: false,
      };
      await addItem(data);
      alert("Đã thêm vào giỏ hàng");
    }
  };

  return (
    <>
      <HeaderMain />
      <section className="detail-section my-5">
        <div className="detail-container">
          <div className="row detail">
            <div className="col-md-5 detail-gallery">
              <img src={product.avatar} />
            </div>
            <div className="col-md-6 detail-gallery">
              <h1>{product.name}</h1>
              <h3 className="fs-4" style={{ color: "#ee4d2d" }}>
                {product.price}.000 đ
              </h3>
              <p>{product.detail}</p>
              <div className="cart">
                <div className="d-none">
                  <button
                    className="sum-cart btn-cart"
                    onClick={() =>
                      updateItemQuantity(product.id, product.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="numeric"
                    value={product.quantity}
                    defaultValue={1}
                    className="inp-cart"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    className="sum-cart btn-cart"
                    onClick={() =>
                      updateItemQuantity(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className="btn-addCart"
                    onClick={() => AddItemtoCart(product.id, 2)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailProduct;
