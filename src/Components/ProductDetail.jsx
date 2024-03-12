import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../Store/Actions/productActions";

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const getProductDetail = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            dispatch(selectedProduct(response.data));
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    useEffect(() => {
        if (id && id !== '') {
            getProductDetail();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [id]);

    const { title, price, category, description, image } = product;

    return (
        <div className="max-w-4xl mx-auto mt-8 px-4">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            {Object.keys(product).length === 0 ? (
                <div className="text-gray-600">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src={image} alt={title} className="rounded-lg shadow-md" />
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg">Category: {category}</p>
                        <p className="text-gray-600 text-lg">Price: ${price}</p>
                        <p className="text-gray-600 text-lg mt-4">{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
