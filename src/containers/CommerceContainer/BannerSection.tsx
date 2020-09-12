import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import CommerceInfo from './CommerceInfo';
import Promotions from './Promotions';

interface IProps {
	commerceInfo: { phone: string };
}

const BannerSection = ({ commerceInfo }: IProps) => {
	return (
		<BannerSectionStyled className="container flex column">
			<Box>
				<Flex justifyContent="space-between">
					<Box className="slider"></Box>
					<CommerceInfo data={commerceInfo} />
				</Flex>
				<Flex alignItems="center" justifyContent="space-between" mt={3}>
					<span className="promotions-title bold">
						Promociones en vivo
					</span>
					<div className="bar"></div>
				</Flex>
				<Promotions />
			</Box>
		</BannerSectionStyled>
	);
};

const BannerSectionStyled = styled.section`
	background: ${(props: any) => props.theme.colors.white};
	width: 100%;
	padding: 16px 16px 32px;

	.slider {
		width: 65%;
		background: black;
		height: 217px;
	}

	.promotions-title {
		color: ${(props: any) => props.theme.colors.black};
		font-size: 20px;
		font-weight: bold;
		width: 250px;
	}

	.bar {
		flex: 1;
		height: 2px;
		background: #eee;
	}
`;

export default BannerSection;
