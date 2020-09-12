import { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { CartContext } from 'contexts/cartContext';
import { Flex, Box } from 'reflexbox';
import Navigation from './Navigation';
import CartIcon from './icons/CartIcon';

const Header = () => {
	const { cart } = useContext(CartContext);

	return (
		<HeaderStyled>
			<Navigation />
			<Flex
				className="container"
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Box style={{ lineHeight: 0 }}>
					<Link href="/">
						<img
							className="logo pointer"
							src="/images/logo.png"
							srcSet="/images/logo@2x.png 2x, /images/logo@3x.png 3x"
							alt="instagram"
						/>
					</Link>
				</Box>
				<Box width="45%">
					<div className="search-container flex row">
						<input />
						<CartIcon quantity={cart.length} isWhite />
					</div>
				</Box>
			</Flex>
			<Box></Box>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	.container {
		background: ${(props: any) => props.theme.colors.red};
		height: 75px;
		border-radius: 0;
		padding: 0 60px;
		width: 100%;

		.logo {
			width: 215px;
			height: 40px;
		}

		.search-container {
			align-items: center;
			padding-right: 16px;

			input {
				flex: 1;
				height: 40px;
				margin-right: 23px;
				border-radius: 5px;
				padding-left: 12px;
				color: ${(props: any) => props.theme.colors.gray};
				border: solid 1px ${(props: any) => props.theme.colors.white};
				background-color: ${(props: any) => props.theme.colors.white};
			}
		}
	}
`;

export default Header;
