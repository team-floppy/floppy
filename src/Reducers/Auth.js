const DefaultUser = {};

export default (state = DefaultUser, action) => {
  switch (action.type) {
    case "login":
      return { ...action.user };
    case "userType":
      return { ...state, type: action.usertype };
    case "logout":
      return {};
    default:
      return state;
  }
};
