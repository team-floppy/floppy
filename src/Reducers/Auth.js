const DefaultUser = {};

export default (state = DefaultUser, action) => {
  switch (action.type) {
    case "login":
      return { ...action.user };
    case "logout":
      return {};
    default:
      return state;
  }
};
