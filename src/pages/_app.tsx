import { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import '../styles/global.scss';

import { CartContext } from '../contexts/cartContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import theme from '../theme/theme';
import { ProductCartItem } from '../models/ProductCartItem';
import { Product } from 'models/Product';

const MyApp = ({ Component, pageProps }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product: Product, quantity: number = 1) => {
		setCart((cart) => {
			let wasAdded = false;

			cart.some((item: ProductCartItem) => {
				if (item.product.id === product.id) {
					wasAdded = true;
				}

				return wasAdded;
			});

			if (wasAdded) {
				return cart.map((item: ProductCartItem) => {
					if (item.product.id === product.id) {
						return { ...item, quantity: item.quantity + quantity };
					}

					return item;
				});
			}

			return [...cart, { product, quantity }];
		});
	};

	const getTotal = (): number => {
		return cart.reduce((total: number, item: ProductCartItem) => {
			const { quantity, product } = item;

			return total + quantity * product.price;
		}, 0);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, getTotal }}>
			<ThemeProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</CartContext.Provider>
	);
};

export default MyApp;
