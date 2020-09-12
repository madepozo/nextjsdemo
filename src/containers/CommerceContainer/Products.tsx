import styled from '@emotion/styled';

import { Flex, Box } from 'reflexbox';
import Product from './Product';
import { Product as ProductModel } from '../../models/Product';

interface IProps {
	data: ProductModel[];
}

const Products = (props: IProps) => {
	const category = 'Carteras y bolsos';
	const { data } = props;

	return (
		<ProductsStyled>
			<Flex mt={3} alignItems="center">
				<Box className="category bold">{category}</Box>
				<Box flex={1} className="bar"></Box>
				<Box>
					<button className="show-more semi-bold">Ver más</button>
				</Box>
			</Flex>
			<Flex flexWrap="wrap" my={2} alignItems="stretch">
				{data.map((product: ProductModel) => (
					<Box
						key={`Products-item-${product.id}`}
						width={['100%', '50%', '33%', '25%', '20%']}
						p={1}
					>
						<Product product={product} />
					</Box>
				))}
			</Flex>
		</ProductsStyled>
	);
};

const ProductsStyled = styled.section`
	margin-top: 18px;

	.category {
		color: ${(props: any) => props.theme.colors.black};
		font-size: 20px;
		font-weight: bold;
		padding: 0 20px;
	}

	.bar {
		background: #eee;
		height: 4px;
		width: 100%;
	}

	.show-more {
		border-radius: 5px;
		border: solid 1px ${(props: any) => props.theme.colors.green};
		color: ${(props: any) => props.theme.colors.green};
		font-size: 12px;
		font-weight: 600;
		height: 30px;
		margin: 0 8px 0 17px;
		text-transform: uppercase;
		width: 119px;
	}
`;

export default Products;
