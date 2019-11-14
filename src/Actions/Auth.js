import axios from "axios";

export const Login = (user = {}) => ({
  type: "login",
  user
});

export const Logout = () => ({
  type: "logout"
});

export const LoginUser = (user = {}) => {
  return dispatch => {
    return axios
      .post("auth/authenticate", user)
      .then(({ data }) => {
        if (data.success) {
          return data;
        } else {
          return data;
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  };
};

export const RegisterUser = data => {
  return dispatch => {
    return axios
      .post("auth/register", data)
      .then(({ data }) => {
        if (data.success) {
          return data;
        } else {
          return data;
        }
      })
      .catch(error => {
        throw error;
      });
  };
};
