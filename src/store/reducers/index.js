import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { loadingBarReducer } from "react-redux-loading-bar";
//import { notification } from "../components/notification/reducers";
//import { schedules, visibilityFilter } from "../components/schedule/reducers";

import sideBarReducer from './sideBarReducer';

const reducers = combineReducers({
  form: formReducer,
  loadingBar: loadingBarReducer,
  sideBar: sideBarReducer,
  //notification,
  //schedules,
  //visibilityFilter
});

export default reducers;
