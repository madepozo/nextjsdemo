import styled from '@emotion/styled';
import { Product } from 'models/Product';

import { Flex, Box } from 'reflexbox';
import ProductInfo from './ProductInfo';

interface IProps {
	productInfo: Product;
}

const BannerSection = (props: IProps) => {
	return (
		<BannerSectionStyled className="container flex column">
			<Box height="100%">
				<Flex
					flexDirection="row"
					justifyContent="space-between"
					alignItems="stretch"
					height="100%"
				>
					<Box className="photos" width={1 / 2}></Box>
					<Box className="detail" width={1 / 2}>
						<ProductInfo product={props.productInfo} />
					</Box>
				</Flex>
			</Box>
		</BannerSectionStyled>
	);
};

const BannerSectionStyled = styled.section`
	background: ${(props) => props.theme.colors.white};
	padding: 16px 16px 32px;
	width: 100%;

	.photos {
	}

	.detail {
		justify-content: space-between;
		padding: 50px;
	}
`;

export default BannerSection;
