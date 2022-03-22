import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import { ProductCard, Spinner } from '../../components'
import { Product } from '../../interfaces/product.interface'
import { getProducts } from '../../services/OptiCartService'

import './MainPage.scss'

export const MainPage = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		updateProducts()
	}, [])

	const updateProducts = () => {
		setLoading(true)

		getProducts()
			.then(result => setProducts(result))
			.then(() => setLoading(false))
	}

	return (
		<main className='main-page'>
			<div className='container'>
				{loading && <Spinner />}
				{!loading &&
					products.map((item: Product) => (
						<ProductCard key={nanoid()} {...item} />
					))}
			</div>
		</main>
	)
}
