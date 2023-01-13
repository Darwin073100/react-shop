import { useEffect, useState } from "react";
import axios from "axios";

const useGetPrducts = (API)=>{
    // Estado del componente
    const [products, setProducts] = useState([]);

    // Consumo de la API
    useEffect(()=>{
        const getProduct = async()=>{
            const response = await axios.get(API);
            setProducts(response.data);
        }
        getProduct();
    },[]);

    return products;
};

export default useGetPrducts;