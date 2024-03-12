import { combineReducers } from "redux";
import { productReducer,SelectedproductReducer } from "./productReducer";

const reducer = combineReducers({
    allProducts : productReducer,
    product : SelectedproductReducer,
});

export default reducer;