import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import User from "../Reducers/Auth";

const ComposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      User
    }),
    ComposeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
