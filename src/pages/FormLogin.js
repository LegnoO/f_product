import "./../assets/login.css";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/loginSlice";
import HeaderMain from "../pages/Header/HeaderMain";
import Footer from "../pages/Footer/Footer";
import "../assets/login.css";
import { useEffect } from "react";
import { auth } from "../services/authService";
import { useCart } from "react-use-cart";

const FormLogin = () => {
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

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loading, loggedIn, error } = useSelector((state) => state.signin);

  useEffect(() => {
    const userdata = auth.getUser();
    if (userdata) {
      navigate("/product");
    } else {
    }
  }, []);

  const onSubmit = async (data) => {
    const formdata = {
      email: data.email,
      password: data.password,
      rememberMe: true,
    };

    try {
      await dispatch(login(formdata));
      navigate("/product");
    } catch (error) {
      console.log("%cCan not login!", "color:red", "Error:", error.message);
    }
  };

  return (
    <>
      <HeaderMain />
      <div className="container rounded-1 mt-5">
        {loading ? (
          <div className="Loading">
            <ReactLoading
              type="spin"
              color="blue"
              height={"20%"}
              width={"20%"}
            />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-group login-container container"
          >
            <div className="mb-4">
              <h1 className="form-title fs-2">Đăng Nhập</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                placeholder=""
                noValidate
                className="form-control border-dark"
              />
              {errors.email && (
                <span className="text-error">Please type email</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                name="password"
                placeholder=""
                noValidate
                className="form-input form-control border-dark"
              />
              {errors.password && (
                <span className="text-error">Please type password</span>
              )}
            </div>

            <div className="mb-3">
              <button type="submit" className="submit-button">
                Log in
              </button>
            </div>

            <div className="form-footer fs-5 text-black">
              Don't have an account?{" "}
              <Link className="link-text text-black" to="/register">
                Sign up
              </Link>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FormLogin;
