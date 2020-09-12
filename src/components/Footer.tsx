import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';

const Footer = () => {
	return (
		<FooterStyled>
			<div className="separator"></div>
			<div className="content">
				<Flex mt={4}>
					<Box width={1 / 3}></Box>
					<Box width={2 / 3}>
						<Flex className="menu">
							<Box width={1 / 3}>
								<h3 className="menu-title bold upper">
									nosotros
								</h3>
								<ul>
									<li>¿Quiénes somos?</li>
									<li>Políticas de Envío</li>
									<li>Tiendas</li>
								</ul>
							</Box>
							<Box width={1 / 3}>
								<h3 className="menu-title bold upper">
									tienda online
								</h3>
								<ul>
									<li>Beneficios</li>
									<li>Legales</li>
									<li>Preguntas legales</li>
									<li>Terminos y condiciones</li>
									<li>Políticas de privacidad y seguridad</li>
								</ul>
							</Box>
							<Box width={1 / 3}>
								<h3 className="menu-title bold upper">
									contáctanos
								</h3>
								<ul>
									<li>Tiendas</li>
									<li>Consultas y sugerencias</li>
									<li>Código de ética</li>
									<li className="flex row">
										<span className="icon-book"></span>
										<span className="text">
											Libro <br />
											de reclamaciones
										</span>
									</li>
								</ul>
							</Box>
						</Flex>
					</Box>
				</Flex>
				<hr />
				<p className="copyright">
					COMPRAS 100% SEGURAS <br />
					Esta tienda onine está autorizada por Visa para relizar
					transsacciones electrónicas. <br />© 2020 Comprale al perú
					Lima - Perú
				</p>
			</div>
		</FooterStyled>
	);
};

const FooterStyled = styled.footer`
	background: ${(props: any) => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 40px;

	.separator {
		background: ${(props: any) => props.theme.colors.red};
		height: 26px;
		width: 100%;
	}

	.content {
		width: 86%;
		padding: 40px 0;

		hr {
			height: 1px;
			width: 100%;
			margin: 40px 0;
			background: #dbdbdb;
		}

		.copyright {
			color: #8b8b8b;
			font-size: 12px;
			line-height: 1.25;
			width: 500px;
		}

		.menu {
			.menu-title {
				color: #494949;
				font-size: 16px;
			}

			ul {
				list-style: none;
				padding: 19px 0 0;

				li {
					color: #8b8b8b;
					font-size: 12px;
					margin-bottom: 14px;
					align-items: center;
				}

				.text {
					color: #494949;
				}
			}
		}

		.icon-book {
			font-size: 30px;
			margin-right: 5px;
		}
	}
`;

export default Footer;
