import axios from "axios";

export const Dashboard = (user = {}) => ({
  type: "login",
  user
});

export const getDasboardDetails = () => {
  return dispatch => {
    return axios
      .get("merchant/dashboard/main")
      .then(({ data }) => {
        console.log("hi", data);
        if (
          data.status == "success" ||
          data.message == "dashboard data succesfully retrieved"
        ) {
          return data.data;
        } else {
          return false;
        }
      })
      .catch(error => {
        throw error;
      });
  };
};
