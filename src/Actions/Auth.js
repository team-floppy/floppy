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
      .post("/auth", user)
      .then(({ data }) => {
        console.log("User", data.token);
        if (data.status == "failed" && data.message == "bad credentials") {
          throw new Error("Wrong email or password");
        } else {
          SetItem({
            token: data.token,
            user: { firstname: data.user.firstname }
          }).then(res => {
            dispatch(Login(data));
            return data;
          });
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  };
};
