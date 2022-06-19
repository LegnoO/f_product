import React from "react";
import { useForm } from "react-hook-form";
import { userdata } from "../../utils";
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
      user_id: userdata.user_id,
      fullname: data.name,
      phone: data.phone,
      address: data.address,
      item: items,
    };
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
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
            {/* -------------------- */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
