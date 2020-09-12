import styled from '@emotion/styled';

const Promotions = () => {
	const promotions = [];
	return (
		<PromotionsStyled>
			{promotions.length ? null : (
				<div className="message center">
					En algunos momentos la tienda agregara más promociones en
					vivo.
					<br />
					Puedes seguir viendo nuestros productos.
				</div>
			)}
		</PromotionsStyled>
	);
};

const PromotionsStyled = styled.div`
	display: flex;
	background: ${(props: any) => props.theme.colors.light_gray};
	border-radius: 12px;
	justify-content: center;
	width: 100%;
	margin-top: 13px;
	height: 147px;

	.message {
		font-size: 12px;
		line-height: 1.25;
		color: #b5b5b5;
		text-align: center;
		width: 430px;
	}
`;

export default Promotions;
