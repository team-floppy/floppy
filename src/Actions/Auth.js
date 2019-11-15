import axios from "axios";

export const Login = (user = {}) => ({
  type: "login",
  user
});

export const Logout = () => ({
  type: "logout"
});

export const Type = user => ({
  type: "userType",
  usertype: user
});

export const LoginUser = (user = {}) => {
  return dispatch => {
    return axios
      .post("auth/authenticate", user)
      .then(({ data }) => {
        if (data.success) {
          dispatch(Login(data));
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

export const userType = (token, user) => {
  console.log(user);
  return dispatch => {
    return axios
      .put("/user/editProfile", user, {
        headers: {
          "x-access-token": token
        }
      })
      .then(({ data }) => {
        if (data.success) {
          return data;
        } else {
          throw new Error(data.message);
        }
      })
      .catch(error => {
        throw error;
      });
  };
};

export const RegisterUser = data => {
  return dispatch => {
    return axios
      .post("auth/register", data)
      .then(({ data }) => {
        console.log(data)
        if (data.success) {
          return data;
        } else {
          console.log("here")
          return data;
        }
      })
      .catch(error => {
       return error
      });
  };
};
