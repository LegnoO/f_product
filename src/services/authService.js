import serviceCallApi from "../services/ServicesCallAPI";

// const signin = async ({ email, password }, apiContext = {}) => {
//   const data = { email, password };
//   try {
//     const result = await serviceCallApi("login", "POST", data);
//     console.log('Connected',result)
//     const response = { token: result.data.token, user: result.data };
//     return response;
//   } catch (error) {
//     return error.message;
//   }
// };

const TOKEN_KEY = "userInfo";
const USER_KEY = "userData";

const isAuthenticated = () => {
  return !!getToken();
};

const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
};

const login = async ({ email, password, rememberMe }) => {
  const data = { email, password };
  const result = await serviceCallApi("login", "POST", data);
  console.log("Connected", result);

  const response = { token: result.data.data.token, user: result.data };
  console.log('response',response)
  const { token, user } = response;
  
  // if (rememberMe) {
  //   localStorage.setItem(TOKEN_KEY, token);
  //   localStorage.setItem(USER_KEY, JSON.stringify(user));
  // } else {
  //   sessionStorage.setItem(TOKEN_KEY, token);
  // }

  return { token, user };
};

export const auth = { isAuthenticated, getToken, login };
