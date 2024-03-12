import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProduct } from "../Store/Actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch();
    // const products = useSelector((data) => data);

    // fetch all products form api and dispatch to the Store with action 
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.error(err);
        })
        dispatch(setProduct(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    // console.error(products);
    return (
        <>
            <h1 className="text-4xl text-center font-semibold mt-2">Product Listing Component</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-9 mt-2 p-10">
                <ProductComponent />
            </div>
        </>
    );
};

export default ProductListing;
