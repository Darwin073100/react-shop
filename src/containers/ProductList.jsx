import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products?limit=6&offset=1';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(()=>{
		const getProduct = async()=>{
			const response = await axios.get(API);
			setProducts(response.data);
		}
		getProduct();
	},[]);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product)=>(
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;