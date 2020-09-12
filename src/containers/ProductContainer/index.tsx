import styled from '@emotion/styled';
import Cart from '../../components/Cart';
import BannerSection from './BannerSection';
import { Product } from '../../models/Product';

interface IProps {
	product: Product;
	commerceName: string;
}

const ProductContainer = (props: IProps) => {
	const { product, commerceName } = props;

	return (
		<ProductContainerStyled>
			<h2 className="commerce-title container center bold capitalize">
				{commerceName}
			</h2>
			<div className="product-content flex row">
				<main className="main container">
					<BannerSection productInfo={product} />
				</main>
				<Cart />
			</div>
		</ProductContainerStyled>
	);
};

const ProductContainerStyled = styled.section`
	padding: 10px 60px;
	background: ${(props) => props.theme.colors.light_gray};

	.commerce-title {
		background: ${(props) => props.theme.colors.white};
		height: 58px;
		color: ${(props) => props.theme.colors.red};
	}

	.product-content {
		margin-top: 11px;
		justify-content: space-between;
	}

	.main {
		flex: 1;
		margin-right: 12px;
	}
`;

export default ProductContainer;
