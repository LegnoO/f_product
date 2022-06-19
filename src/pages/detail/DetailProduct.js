import React, { useState, useEffect } from "react";
import serviceCallAPI from "../../services/ServicesCallAPI";
import { useParams } from "react-router-dom";
import { setItems } from "react-use-cart";
import { useCart } from "react-use-cart";
import "./detail.css";
const DetailProduct = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState();
  let { slug, product_id } = useParams();

  const GetProductID = async () => {
    const response = await serviceCallAPI(`products/${product_id}`, "GET");
    setProduct(response.data.data);
  };

  useEffect(() => {
    GetProductID();
  }, []);
  const AddItemtoCart = () => {
    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      avatar: product.avatar,
      detail: product.detail,
      cate_id: product.cate_id,
    };
      addItem(data, parseInt(quantity));
  };
  
  return (
    <div>
      <section className="detail-section">
        <div className="detail-container">
          <div className="row detail">
            <div className="col-6 detail-gallery">
              <img src={product.avatar} />
            </div>

            <div className="col-6 detail-gallery">
              <h1>{product.name}</h1>
              <h3>{product.price}</h3>
              <p>
                Đồng hồ nam Curnon Colosseum Guandao mang phong cách mạnh mẽ,
                trưởng thành, vững chãi; Dây da, Kích thước mặt lớn 42mm, Kính
                Sapphire chống xước, Chống nước 5ATM vượt trội...
              </p>
              <ul>
                <li>Type: COLOSSEUM</li>
                <li>Tag: Man</li>
              </ul>
              <div className="cart">
                <div>
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
                    defaultValue={1}
                    className="inp-cart"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button className="sum-cart btn-cart">+</button>
                </div>
                <div>
                  <button
                    className="btn-addCart"
                    onClick={() => AddItemtoCart(product.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailProduct;
