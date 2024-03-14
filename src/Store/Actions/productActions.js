import fakeStoreapi from "../../Components/apis/fakeStoreapi";

export const  fetchProducts = () => {

    // use of middleware method
    return async (dispatch) => {
        const response = await fakeStoreapi.get('/products')
        dispatch({
            type : 'FETCH_PRODUCTS',
            payload: response.data,
        })
    }
};

export const  fetchProduct = (id) => {

    // use of middleware method
    return async (dispatch) => {
        const response = await fakeStoreapi.get(`/products/${id}`);
        dispatch({
            type : 'SELECTED_PRODUCT',
            payload: response.data,
        })
    }
};
export const setProduct = (products) => {
    return {
        type : 'SET_PRODUCTS',
        payload: products
    }
};
export const selectedProduct = (product) => {
    return {
        type : 'SELECTED_PRODUCT',
        payload: product
    }
};
export const removeSelectedProduct = () => {
    return {
        type : 'REMOVE_SELECTED_PRODUCT',
    }
};

