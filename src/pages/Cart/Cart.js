import { useCart } from "react-use-cart";
// import "../Cart/cart.css";
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();


  const RenderItem = () => {
    return items.map((item, id) => (
      <div key={id}>
        <div className="cart-list">
          <div>Quantity: {item.quantity}</div>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <button
            type="button"
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
          <button type="button" onClick={() => removeItem(item.id)}>
            X
          </button>
          <button
            type="button"
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
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
  if (isEmpty) return <h1 className="d-flex justify-content-center fw-bold text-center text-danger">Your cart is empty</h1>;
  return <div>
    <div>{RenderItem()}</div>
    {/* <div>{userdata ? (<Link className="btn" to='/checkout'>Checkout</Link>) : (<Link className="btn" to='/login'>Login</Link>)}</div> */}
  </div>;
};

export default Cart;
