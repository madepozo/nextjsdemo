import styled from '@emotion/styled';
import { Product } from '../../models/Product';

interface IProps {
	product: Product;
	quantity: number;
}

const CartProduct = (props: IProps) => {
	const { product, quantity } = props;
	const { name, price } = product;

	return (
		<CartProductStyled className="flex column">
			<h4 className="commerce-name">Tienda Sybilla</h4>
			<div className="product-detail flex row">
				<img src="https://picsum.photos/100" />
				<span className="product-name capitalize">
					{name.toLowerCase()} <br /> S/{price.toFixed(2)}
				</span>
				<span className="product-amount bold">{quantity}</span>
			</div>
		</CartProductStyled>
	);
};

const CartProductStyled = styled.article`
	height: 80px;
	margin-bottom: 20px;

	.commerce-name {
		background: ${(props) => props.theme.colors.black};
		color: ${(props) => props.theme.colors.white};
		border-radius: 4px;
		text-align: center;
		font-size: 12px;
		line-height: 19px;
		height: 19px;
		width: 100%;
	}

	.product-detail {
		padding: 16px 0;
		justify-content: space-between;
		align-items: center;

		img {
			width: 50px;
			height: auto;
		}

		.product-name {
			font-size: 12px;
			color: ${(props) => props.theme.colors.black};
			line-height: 1.5;
			padding: 2px;
			width: 90px;
		}

		.product-amount {
			border: 1px solid ${(props) => props.theme.colors.red};
			border-radius: 50%;
			color: ${(props) => props.theme.colors.red};
			font-size: 14px;
			line-height: 23px;
			height: 23px;
			width: 23px;
			text-align: center;
		}
	}
`;

export default CartProduct;
