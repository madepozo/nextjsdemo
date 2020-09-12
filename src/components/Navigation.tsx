import Link from 'next/link';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';

const Navigation = () => {
	return (
		<NavigationStyled>
			<Box px={60}>
				<Flex className="container" justifyContent="space-between">
					<Flex className="sponsors"></Flex>
					<Flex className="menu" alignItems="center">
						<Link href="/">
							<a>¿Por qué comprale al perú?</a>
						</Link>
						<Link href="/">
							<a>Políticas de envío</a>
						</Link>
						<Link href="/">
							<a>Entorno Mype</a>
						</Link>
						<Link href="/">
							<a>Ayuda</a>
						</Link>
					</Flex>
				</Flex>
			</Box>
		</NavigationStyled>
	);
};

const NavigationStyled = styled.div`
	height: 40px;

	.container {
		background: ${(props) => props.theme.colors.light_gray};
		height: 40px;
	}

	.menu {
		a {
			font-size: 12px;
			color: ${(props) => props.theme.colors.dark_gray};
			margin: 0 5px;
			padding: 6px 10px;

			&:last-child {
				margin-right: 0;
			}
		}
	}
`;

export default Navigation;
