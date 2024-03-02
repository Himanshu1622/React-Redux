import { combineReducers } from "redux";
import productReducer from "./productReducer";

const reducer = combineReducers({
    allProducts : productReducer,
});

export default reducer;