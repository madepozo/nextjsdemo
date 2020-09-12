import { useContext, useState } from 'react';
import { Flex } from 'reflexbox';
import styled from '@emotion/styled';

import { Product } from 'models/Product';
import { CartContext } from 'contexts/cartContext';

interface IProps {
	product: Product;
}

const ProductInfo = (props: IProps) => {
	const { addToCart } = useContext(CartContext);
	const { name, priceNew, priceOld } = props.product;
	const [quantity, setQuantity] = useState<number>(0);

	const updateQuantity = (value) => {
		setQuantity((current) => current + value);
	};

	const handleAdd = () => {
		addToCart(props.product, quantity);
	};

	return (
		<ProductInfoStyled>
			<Flex flexDirection="column" justifyContent="center" height="100%">
				<h3 className="product-name capitalize">{name}</h3>
				<span className="product-mark">Sybilla</span>
				<span className="product-code">Cart-979898</span>
				<div className="product-price">
					<span className="now extra-bold">S/{priceNew}</span>
					<span className="before medium">S/{priceOld}</span>
				</div>
				<div className="product-actions flex row">
					<span className="quantity">{quantity}</span>
					<div className="actions flex column">
						<button
							className="increase"
							onClick={updateQuantity.bind(null, 1)}
						>
							+
						</button>
						<button
							className="decrease"
							disabled={!quantity}
							onClick={updateQuantity.bind(null, -1)}
						>
							-
						</button>
					</div>
					<button
						className="product-add-button bold"
						disabled={!quantity}
						onClick={handleAdd}
					>
						Agregar al carrito
					</button>
				</div>
			</Flex>
		</ProductInfoStyled>
	);
};

const ProductInfoStyled = styled.div`
	.product-name {
		color: ${(props) => props.theme.colors.black};
		font-size: 21px;
		line-height: 1.1;
		margin: 10px 0;
	}

	.product-price {
		margin: 12px 0;

		.now {
			color: ${(props) => props.theme.colors.black};
			font-size: 17px;
			font-weight: 500;
			margin-right: 5px;
		}

		.before {
			color: #494949;
			font-size: 11px;
			opacity: 0.53;
			text-decoration: line-through;
		}
	}

	.product-actions {
		margin: 25px 0;

		.quantity {
			background: ${(props) => props.theme.colors.light_gray};
			border-radius: 2px;
			color: #494949;
			height: 45px;
			line-height: 45px;
			margin-right: 5px;
			text-align: center;
			width: 54px;
		}

		.actions {
			button {
				background: #494949;
				border-radius: 2px;
				color: ${(props) => props.theme.colors.white};
				font-size: 10px;
				height: 21px;
				line-height: 21px;
				width: 26px;
				transition: 0.25s background linear;

				&:disabled {
					background: #d8d8d8;
				}
			}

			.increase {
				margin-bottom: 3px;
			}
		}
	}

	.product-add-button {
		border: solid 1px ${(props) => props.theme.colors.green};
		border-radius: 5px;
		color: ${(props) => props.theme.colors.green};
		height: 45px;
		font-size: 14px;
		margin-left: 13px;
		width: 168px;

		&:disabled {
			opacity: 0.65;
		}
	}
`;

export default ProductInfo;
