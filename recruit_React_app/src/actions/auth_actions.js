import { LOGIN_USER } from "./types";
import History from "../history";
import axios from "axios";

export const login = (data) => async (dispatch) => {
  axios
    .post("/user/login", data)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        dispatch(loginUser(res.data));
        dispatch({
          type: "LOGIN_SUCCESSFULLY",
          payload: {
            Registered: true,
            message: res.data.message,
          },
        });

        setTimeout(function () {
          History.push("/dashboard");
        }, 2000);
      }
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "LOGIN_SUCCESSFULLY",
        payload: {
          Registered: false,
          message: error.response.data.message,
        },
      });
    });
};
export const userPostFetch = (userq) => async (dispatch) => {
  if (userq) {
  }
};

export const loginUser = (userObj) => ({
  type: "LOGIN_USER",
  payload: userObj,
});

export const register = (data) => async (dispatch) => {
  await axios
    .post("/user/register", data)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "USER_REGISTERED",
          payload: {
            Registered: true,
            message: res.data.message,
          },
        });
      }
      setTimeout(function () {
        History.push("/dashboard");
      }, 2000);
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "USER_REGISTERED_FAILED",
        payload: {
          Registered: false,
          message: error.response.data.message,
        },
      });
    });
};

export const myProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .post(
      "/user/userProfile",
      {},
      {
        headers: {
          "x-auth-token": `${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: "MYPROFILE",
          payload: {
            message: res.data,
          },
        });
      }
    })
    .catch((error) => {
      throw error;
    });
};
