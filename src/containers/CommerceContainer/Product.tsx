import Link from 'next/link';
import { useContext } from 'react';
import styled from '@emotion/styled';

import { CartContext } from '../../contexts/cartContext';
import StarRating from '../../components/StarRating';
import { Product as ProductModel } from '../../models/Product';

interface IProps {
	product: ProductModel;
}

const Product = (props: IProps) => {
	const { addToCart } = useContext(CartContext);
	const { id, name, priceNew, priceOld, discount } = props.product;

	const handleAdd = () => {
		addToCart(props.product);
	};

	return (
		<ProductStyled className="container">
			{discount && (
				<span className="discount">
					<span className="value bold">{discount}%</span> dsto
				</span>
			)}
			<div className="product-cover">
				<span className="view-detail pointer">
					<Link
						href="/comercios/[commerceSlug]/productos/[productId]"
						as={`/comercios/mi-nueva-tienda/productos/${id}`}
					>
						<span className="icon-view"></span>
					</Link>
				</span>
				<img src="https://picsum.photos/200" />
			</div>
			<h3 className="product-title">{name.toLowerCase()}</h3>
			<div className="product-price">
				<span className="now extra-bold">S/{priceNew}</span>
				<span className="before medium">S/{priceOld}</span>
			</div>
			<div className="product-info">
				<span className="sold">100 vendidos</span>
				<span className="rating">
					<StarRating currentRating={4} numberOfStars={5} />
				</span>
			</div>
			<button className="product-add-button" onClick={handleAdd}>
				agegar a carrito
			</button>
		</ProductStyled>
	);
};

const ProductStyled = styled.article`
	background: ${(props: any) => props.theme.colors.white};
	flex-direction: column;
	align-items: center;
	width: 100%;
	position: relative;
	padding: 8px 6px;

	.discount {
		background: ${(props: any) => props.theme.colors.red};
		color: ${(props: any) => props.theme.colors.white};
		border-radius: 12px 12px 0;
		font-size: 10px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		position: absolute;
		top: 7px;
		left: 5px;
		width: 70px;
		z-index: 1;

		.value {
			font-size: 13px;
		}
	}

	.product-cover {
		position: relative;
		border-radius: 12px;
		width: 100%;
		text-align: center;
		transition: all 0.25s linear;
		overflow: hidden;

		img {
			width: 90%;
			margin: 5%;
			border-radius: 12px;
			height: auto;
		}

		.view-detail {
			background: ${(props: any) => props.theme.colors.white};
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
			position: absolute;
			border-radius: 50%;
			top: 6px;
			right: 6px;
			height: 34px;
			line-height: 38px;
			opacity: 0;
			visibility: hidden;
			transition: all 0.25s linear;
			width: 34px;
		}

		.icon-view {
			color: ${(props: any) => props.theme.colors.green};
			font-size: 16px;
		}

		&:hover {
			background: ${(props: any) => props.theme.colors.light_gray};

			.view-detail {
				visibility: visible;
				opacity: 1;
			}
		}
	}

	.product-title {
		color: ${(props: any) => props.theme.colors.black};
		font-size: 12px;
		line-height: 1.25;
		font-weight: normal;
		margin: 20px 0 10px;
		text-align: center;
		text-transform: capitalize;
	}

	.product-price {
		display: flex;
		justify-content: center;
		align-items: center;

		.now {
			color: ${(props: any) => props.theme.colors.black};
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

	.product-add-button {
		background: ${(props: any) => props.theme.colors.green};
		color: ${(props: any) => props.theme.colors.white};
		height: 34px;
		border-radius: 5px;
		min-width: 165px;
		text-transform: uppercase;
		font-size: 14px;
		width: 90%;
		visibility: hidden;
		opacity: 0;
		transition: all 0.25s linear;
	}

	.product-info {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 10px 0 7px;
		width: 90%;

		.sold {
			color: ${(props: any) => props.theme.colors.black};
			border-radius: 5px;
			background: #f1f1f1;
			padding: 6px 10px;
			font-size: 10px;
		}

		.rating {
			color: ${(props: any) => props.theme.colors.red};
			text-align: center;
		}
	}

	&:hover {
		.product-add-button {
			visibility: visible;
			opacity: 1;
		}
	}
`;

export default Product;
