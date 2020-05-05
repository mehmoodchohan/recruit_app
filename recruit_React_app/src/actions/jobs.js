import axios from "axios";
import History from "../history";
export const postjob = (data) => async (dispatch) => {
  const token = localStorage.getItem("token");

  console.log(data);
  const res = await axios
    .post("/jobs/addjob", data, {
      headers: {
        "x-auth-token": `${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "JOB_POSTED_SUCCESSFULLY",
          payload: {
            Registered: true,
            message: res.data.message,
          },
        });
        setTimeout(function () {
          History.push("/myjobs");
        }, 2000);
      }
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "JOB_POSTED_FAILED",
        payload: {
          Registered: false,
          message: error.response.data.message,
        },
      });
    });
};

export const jobListing = (data) => async (dispatch) => {
  const token = localStorage.getItem("token");

  console.log(data);
  const res = await axios
    .post("/jobs/getmyjobs", data, {
      headers: {
        "x-auth-token": `${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "JOB_POSTEINGS",
          payload: {
            message: res.data,
          },
        });
      }
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "JOB_LOADING_FAILED",
        payload: {
          Registered: false,
          message: "Error In loading Jobs",
        },
      });
    });
};

export const deleteJob = (data) => async (dispatch) => {
  const token = localStorage.getItem("token");

  console.log(data);
  const res = await axios
    .post(
      "/jobs/deletejob",
      { id: data },
      {
        headers: {
          "x-auth-token": `${token}`,
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        dispatch({
          type: "DELETEJOB_SUCCESS",
          payload: {
            message: res.data.message,
          },
        });
        dispatch(jobListing());
      }
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "DELETEJOB_SUCCESS_FAILED",
        payload: {
          Registered: false,
          message: "Error In loading Jobs",
        },
      });
    });
};
