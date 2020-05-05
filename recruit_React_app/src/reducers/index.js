import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

const initialState_registered = {
  registered: false,
  message: "",
};
const initialStateLogin = {
  isAuthenticated: false,
  currentUser: {},
  message: "",
  profile: [],
};

const initialState_jobs = {
  registered: false,
  message: "",
  jobs: [],
};

const register = (state = initialState_registered, action) => {
  switch (action.type) {
    case "USER_REGISTERED": {
      return { ...state, registered: true, message: action.payload };
    }
    case "USER_REGISTERED_FAILED": {
      return { ...state, registered: false, message: action.payload };
    }
    default:
      return state;
  }
};

const jobs = (state = initialState_jobs, action) => {
  switch (action.type) {
    case "JOB_POSTED_SUCCESSFULLY": {
      return { ...state, registered: true, message: action.payload };
    }
    case "JOB_POSTED_FAILED": {
      return { ...state, registered: false, message: action.payload };
    }
    case "JOB_POSTEINGS": {
      return { ...state, jobs: action.payload };
    }
    default:
      return state;
  }
};

const loginUser = (state = initialStateLogin, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload, isAuthenticated: true };
    case "SET_CURRENT_USER":
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case "GET_USER_INFO":
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    case "LOGIN_SUCCESSFULLY":
      return { ...state, login: false, message: action.payload };
    case "MYPROFILE":
      return { ...state, profile: action.payload };

    default:
      return state;
  }
};
const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);
export default combineReducers({
  form: formReducer,
  register,
  loginUser,
  jobs,
});
