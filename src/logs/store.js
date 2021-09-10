import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { questionReducer } from '../store/reducer/Reducer'

const store = createStore(questionReducer, applyMiddleware(thunk));
export default store