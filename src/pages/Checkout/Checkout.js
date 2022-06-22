import React from "react";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const onSubmit = async (data) => {
    const orderdata = {
      user_id: "userdata.user_id",
      fullname: data.name,
      phone: data.phone,
      address: data.address,
      item: items,
    };
    console.log(orderdata);
  };
const userdata = localStorage.getItem("userInfo");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <label className="form-label">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                placeholder=""
                noValidate
                defaultValue={userdata ? userdata.data.name : null}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Name</label>
              <input
                {...register("phone", { required: true })}
                type="number"
                id="phone"
                name="phone"
                placeholder=""
                noValidate
                defaultValue={userdata ? userdata.data.name : null}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Name</label>
              <input
                {...register("address", { required: true })}
                type="address"
                id="address"
                name="address"
                placeholder=""
                noValidate
                defaultValue={userdata ? userdata.data.name : null}
                className="form-control"
              />
            </div>
            {/* -------------------- */}
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card">  
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.quantity} x {item.name} &mdash;
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-danger mx-2"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
