import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../services/authService";
// import { getCurrentUser } from "./../../api/userAPI";

// export const checkAuth = createAsyncThunk("signing/checkAuth", async () => {
//   if (auth.isAuthenticated()) {
//     const token = auth.getToken();
//     const user = await getCurrentUser({ token });
//     return { token, user };
//   }

//   return { token: null, user: null };
// });

export const login = createAsyncThunk("signin/login", auth.login);

export const loginSlice = createSlice({
  name: "signin",
  initialState: {
    loading: false,
    loggedIn: false,
    error: null,
    loggedInUser: null,
    token: null,
  },
  reducers: {},
  extraReducers: {
    // [checkAuth.pending]: startLoading,
    // [checkAuth.fulfilled]: (state, { payload }) => {
    //   const { token = null, user = null } = payload;

    //   Object.assign(state, {
    //     loading: false,
    //     error: null,
    //     loggedIn: !!token,
    //     loggedInUser: user,
    //     token,
    //   });
    // },
    // [checkAuth.rejected]: receiveError,

    [login.pending]: (state, action) => {
      Object.assign(state, {
        loading: true,
        error: action.error,
      });
    },

    [login.fulfilled]: (state, { payload }) => {
      const { token, user } = payload;

      Object.assign(state, {
        loading: false,
        loggedIn: true,
        loggedInUser: user,
        token,
      });
    },

    [login.rejected]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: action.error,
      });
    },

    // [logout.pending]: startLoading,
    // [logout.fulfilled]: (state) =>
    //   Object.assign(state, {
    //     ...initialState,
    //     loading: false,
    //   }),
    // [logout.rejected]: receiveError,
  },
});

export const loginReducer = loginSlice.reducer;
