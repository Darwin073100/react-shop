import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetPrducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

// Url de la API
const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetPrducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product)=>(
					<ProductItem product={product} key={product.id}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;