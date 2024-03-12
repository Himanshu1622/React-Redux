import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return (
            <div key={id} className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <Link to={`/product/${id}`} className="no-underline text-black">
                    <img className="w-full md:h-60 h-48 object-cover rounded-t-lg" src={image} alt={title} />
                    <div className="p-4">
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h5>
                        <p className="mb-2 text-lg font-normal text-gray-700 dark:text-gray-400">${price}</p>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">{category}</p>
                    </div>
                </Link>
            </div>
        );
    });

    return <>{renderList}</>;
};

export default ProductComponent;
