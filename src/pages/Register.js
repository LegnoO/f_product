import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { useForm } from "react-hook-form";

import serviceCallAPI from "../services/ServicesCallAPI";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(false);
    try {
      // await serviceCallAPI("users", "post", data);
    } catch (e) {
      console.log("%cCan not register!","color:red",'Error:',e.message);
    }

    setTimeout(() => {
      setLoading(true);
      navigate("/");
    }, 10000);
  };

  return (
    <div className="">

      <section className="login-section">
        <div className="container">
          <div className="form">
            <h1 className="form-title">REGISTER</h1>
            {loading ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-form">
                  <span className="span-input">Name</span>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    noValidate
                    className="inp-login"
                  />

                  {errors.name && (
                    <span className="text-error">Please type Name</span>
                  )}
                </div>

                <div className="input-form">
                  <span className="span-input">Email</span>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    id="email"
                    name="email"
                    placeholder=""
                    noValidate
                    className="inp-login"
                  />

                  {errors.email && (
                    <span className="text-error">Please type Email</span>
                  )}
                </div>

                <div className="input-form">
                  <span className="span-input">Password</span>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                    noValidate
                    className="inp-login"
                  />
                  {errors.password && (
                    <span className="text-error">Please type Password</span>
                  )}
                </div>

                <div className="input-form">
                  <span className="span-input">Current Password</span>
                  <input
                    {...register("c_password", { required: true })}
                    type="password"
                    id="c_password"
                    name="c_password"
                    placeholder=""
                    noValidate
                    className="inp-login"
                  />
                  {errors.c_password && (
                    <span className="text-error">
                      Please type current password
                    </span>
                  )}
                </div>
                <button type="submit" className="submit-button">Register</button>
              </form>
            ) : (
              <div className="Loading">
                <ReactLoading
                  type="spin"
                  color="blue"
                  height={"20%"}
                  width={"20%"}
                />
              </div>
            )}

            <div className="form-footer">
              Already have an account?{" "}
              <Link className="link-text" to="/">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
