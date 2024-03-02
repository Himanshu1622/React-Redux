import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PrdouctDetail = () => {
    const {productId} = useParams()
    console.error(productId);
    return (
        <>
            <h1>PrdouctDetail Component</h1>
        </>
    )
}

export default PrdouctDetail;