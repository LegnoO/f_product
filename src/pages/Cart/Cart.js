import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import Header from "../Header/HeaderMain";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { auth } from "../../services/authService";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const navigate = useNavigate();

  let itemtotal = 0;
  const totalItem = () => {
    items.forEach((item) => (itemtotal += item.itemTotal));
    return itemtotal;
  };

  useEffect(() => {
    const userdata = auth.getUser();
    if (!userdata) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    totalItem();
  }, [items]);

  const RenderItem = () => {
    return items.map((item, id) => (
      <div
        className="row justify-content-between bg-white py-4 align-items-center border-bottom"
        key={id}
      >
        <div className="col-1 text-center">
          <input className="form-check-input" value="" type="checkbox" />
        </div>
        <div className="col-5">
          <div className="row justify-content-center">
            <div className="col-2">
              <img className="img-fluid" src={item.avatar} />
            </div>
            <div className="col-6">
              <div className="card-text">{item.name}</div>
            </div>
          </div>
        </div>
        <div className="col text-center text-muted">{item.price}.000 đ</div>
        <div className="col">
          <div className="text-center align-items-center">
            <button
              className="btn btn-sm align-items-center"
              type="button"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              style={{ width: "30px" }}
            >
              <svg
                enableBackground="new 0 0 10 10"
                viewBox="0 0 10 10"
                x="0"
                y="0"
                className="shopee-svg-icon"
              >
                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
              </svg>
            </button>

            <input
              className="align-items-center text-center border"
              readOnly
              value={item.quantity}
              style={{ height: "30px", width: "50px" }}
            />

            <button
              className="btn btn-sm align-items-center"
              type="button"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              style={{ width: "30px" }}
            >
              <svg
                enableBackground="new 0 0 10 10"
                viewBox="0 0 10 10"
                x="0"
                y="0"
                className="shopee-svg-icon icon-plus-sign"
              >
                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div className="col text-center" style={{ color: "#ee4d2d" }}>
          {item.itemTotal}.000 đ
        </div>
        <div className="col">
          <div
            className="text-center"
            type="button"
            onClick={() => removeItem(item.id)}
          >
            Xóa
          </div>
        </div>
      </div>
    ));
  };
  // useEffect(() => {
  //   // localStorage.removeItem("userInfo");
  //   // const info = JSON.parse(localStorage.getItem("userInfo"));
  //   // if(info === null){}

  // }, []);
  // console.log(JSON.parse(user).name)
  if (isEmpty)
    return (
      <>
        <Header />
        <h1 className="d-flex justify-content-center fw-bold text-center text-danger my-5">
          Your cart is empty
        </h1>
        <Footer />
      </>
    );
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center bg-white text-muted py-3 my-4">
          <div className="col-1 text-center">
            <input className="form-check-input" value="" type="checkbox" />
          </div>
          <div className="col-5 text-center">
            <div className="" style={{ width: "60%" }}>
              Sản Phẩm
            </div>
          </div>
          <div className="col text-center">Đơn giá</div>
          <div className="col text-center">Số Lượng</div>
          <div className="col text-center">Số Tiền</div>
          <div className="col text-center">Thao Tác</div>
        </div>
        {RenderItem()}
        <div className="mt-4 py-4 row d-flex justify-content-between bg-white">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col row">
            <div className="col-4 d-flex align-items-center">Tổng đơn giá</div>
            <div
              className="col-3 d-flex align-items-center text-center fs-6"
              style={{ color: "#ee4d2d" }}
            >
              {totalItem()}.000
            </div>
            <div className="col">
              <button
                className="btn text-white fs-6 px-4"
                style={{ backgroundColor: "#ee2624" }}
              >
                Mua hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
{
  /* <div>{userdata ? (<Link className="btn" to='/checkout'>Checkout</Link>) : (<Link className="btn" to='/login'>Login</Link>)}</div> */
}
