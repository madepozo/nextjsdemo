import { useContext } from 'react';
import styled from '@emotion/styled';

import { CartContext } from '../../contexts/cartContext';
import CartProduct from './CartProduct';
import CartIcon from '../icons/CartIcon';

const Cart = () => {
	const { cart, getTotal } = useContext(CartContext);

	const subtotal = getTotal();
	const total = subtotal;

	return (
		<CartStyled>
			<div className="cart-header flex row bold">
				<h3>Pedido</h3>
				<CartIcon quantity={cart.length} />
			</div>
			<hr />
			<div className="payment">
				<div className="item semi-bold">
					Sub total:
					<br />
					S/{subtotal.toFixed(2)}
				</div>
				<div className="separator"></div>
				<div className="item semi-bold">
					Envío <br />
					Por definir
				</div>
			</div>
			<span className="cart-total center semi-bold">
				Total S/{total.toFixed(2)}
			</span>
			<div className="cart-products">
				{cart.length ? (
					cart.map((item, index) => (
						<CartProduct
							key={`Cart-product-${index}`}
							product={item.product}
							quantity={item.quantity}
						/>
					))
				) : (
					<div className="no-products flex column center">
						<span className="icon-cart"></span>
						<span className="text">Carrito vacio</span>
					</div>
				)}
			</div>
			<button className="cart-submit center semi-bold">
				Procesar Pago
			</button>
		</CartStyled>
	);
};

const CartStyled = styled.div`
	background: ${(props) => props.theme.colors.white};
	border-radius: 12px;
	box-shadow: 0 2px 12px 0 rgba(230, 230, 230, 0.5);
	height: fit-content;
	padding: 20px 7px 9px 9px;
	width: 229px;

	h3 {
		color: ${(props) => props.theme.colors.red};
		text-transform: uppercase;
	}

	hr {
		height: 2px;
		background: #eeeeee;
	}

	.cart-header {
		padding: 5px 25px 15px 13px;
		justify-content: space-between;
	}

	.cart-total {
		color: ${(props) => props.theme.colors.red};
		font-size: 16px;
		border-radius: 4px;
		font-weight: 600;
		background: #e9e9e9;
		height: 35px;
		margin: 5px 12px;
	}

	.cart-products {
		min-height: 100px;
		max-height: 200px;
		overflow-y: auto;
		align-items: center;
		margin: 10px 12px;

		.no-products {
			height: 75px;
			justify-content: flex-end;

			.icon-cart {
				color: #b5b5b5;
				font-size: 24px;
			}

			.text {
				color: #b5b5b5;
				font-size: 12px;
				margin-top: 5px;
			}
		}
	}

	.payment {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
		margin: 20px 0 15px;

		.item {
			padding: 0 5px;
			font-size: 12px;
			line-height: 1.25;
			color: #000;
			text-align: center;
		}

		.separator {
			width: 2px;
			background: #c6c6c6;
			margin: 0 10px;
		}
	}

	.cart-submit {
		display: flex;
		align-self: flex-end;
		border-radius: 4px;
		background: ${(props) => props.theme.colors.green};
		color: ${(props) => props.theme.colors.white};
		height: 49px;
		width: 100%;
	}
`;

export default Cart;
