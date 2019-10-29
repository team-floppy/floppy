// import React, { Component } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";

// const Private = ({ component: Component, User, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         User.token ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// const mapStateToProps = ({ User }) => ({ User });

// export default connect(
//   mapStateToProps,
//   undefined
// )(Private);
