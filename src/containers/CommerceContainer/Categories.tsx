import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';

interface IProps {
	total: number;
}

const Categories = (props: IProps) => {
	const { total } = props;

	return (
		<CategoriesStyled>
			<Flex
				flexDirection="row"
				width="100%"
				justifyContent="space-between"
			>
				<Box></Box>
				<Box mr={2}>
					<span className="tatal-found">
						{total} {total === 1 ? 'resultado' : 'resultados'}
					</span>
				</Box>
			</Flex>
		</CategoriesStyled>
	);
};

const CategoriesStyled = styled.div`
	border-radius: 12px;
	background: ${(props: any) => props.theme.colors.white};
	box-shadow: 0 2px 12px 0 rgba(230, 230, 230, 0.5);
	display: flex;
	align-items: center;
	height: 58px;
	margin: 13px 0;
	padding: 5px 16px;

	.tatal-found {
		color: ${(props: any) => props.theme.colors.black};
		font-size: 12px;
	}
`;

export default Categories;
