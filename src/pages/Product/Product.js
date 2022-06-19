import React, { useState, useEffect } from "react";
import "../Product/product.css";
import product from "../../data/product.json";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import serviceCallAPI from "../../services/ServicesCallAPI";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../features/productSlice";
const Product = () => {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.product);
  // const DeleteItem = (index) => {
  //   const newData = [...data];
  //   newData.splice(index, 1);
  //   setData(newData);
  // };
  useEffect(() => {
    GetItem();
  }, []);

  const GetItem = async () => {
    // try {
    //   const result = await serviceCallAPI("products?id=12", "GET");
    //   console.log(result.data.message, "\n", result.data.data.data);
    //   setData(result.data.data.data);
    // } catch (error) {
    //   console.log(error.message);
    // }
    const res = await dispatch(getProductList());
    if (res.type === "product/getall/fulfilled") {
      console.log(res);
      setItem(res.payload);
    }
  };

  // const RenderItem = () => {
  //   return item.map((item, index) => (
  //     <div className="product-container col-3" key={index}>
  //       <Link to={`/${item.slug}/${item.id}`}>
  //         <div className="product-item">
  //           <div className="product-image">
  //             <img src={item.avatar} />
  //           </div>
  //           <div className="box-text">
  //             <div className="sub-product">{item.name}</div>
  //             <div className="name-product">{item.detail}</div>
  //             <div className="price-product">{item.price} ₫</div>
  //             <button className="buy-product">Add to cart</button>
  //           </div>
  //         </div>
  //       </Link>
  //     </div>
  //   ));
  // };

  return (
    <div className="">
      {/* <Header /> */}
      <section className="product-section">
        <div className="product-content row">
          <h1>Sản phẩm bán chạy</h1>
          <section>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-3 mb-4">
                  <div
                    className="product-item card text-black p-1"
                    style={{ borderRadius: "5px" }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title">Believing is seeing</h5>
                        <p className="text-muted mb-4">Apple pro display XDR</p>
                      </div>
                      <div />
                      <div className="text-center font-weight-bold mt-4">
                        <span>700,197 ₫</span>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                        <button className="btn-add-cart btn btn-danger">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Product;

// {data.map((item, index) => (
//   <div className="product-item col-3" key={index}>
//     <img src={item.image} />
//     <h5>{item.name}</h5>
//     <div className="">{item.price}$</div>
//     <div className=""></div>
//     <button className="" onClick={() => DeleteItem()}>
//       Delete Item
//     </button>
//   </div>
// ))}

{
  /* <div className='row'>
        <div className='col-2'><div className='ex'><div className='a'></div></div></div>
        <div className='col-2'><div className='ex'><div className='a'></div></div></div>
      </div> */
}
