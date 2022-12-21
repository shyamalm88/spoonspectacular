import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import autoCompleteDataReducer from "../reducers/autoCompleteReducer";
import randomDataReducer from "../reducers/randomDataReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combineStore = combineReducers({
  autoCompleteData: autoCompleteDataReducer,
  randomData: randomDataReducer,
});

const store = createStore(
  combineStore,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
