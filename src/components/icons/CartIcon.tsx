import styled from '@emotion/styled';

interface IProps {
	quantity?: number;
	isWhite?: boolean;
}

const CartIcon = (props: IProps) => (
	<CartIconStyled>
		{props.quantity ? (
			<span className={`total-items ${props.isWhite ? 'white' : ''}`}>
				{props.quantity}
			</span>
		) : null}
		<span className={`icon-cart ${props.isWhite ? 'white' : ''}`}></span>
	</CartIconStyled>
);

const CartIconStyled = styled.div`
	position: relative;

	.total-items {
		background: ${(props: any) => props.theme.colors.red};
		border-radius: 50%;
		color: ${(props: any) => props.theme.colors.white};
		height: 23px;
		width: 23px;
		font-size: 12px;
		line-height: 23px;
		text-align: center;
		position: absolute;
		right: -12px;
		top: -8px;

		&.white {
			background: ${(props: any) => props.theme.colors.white};
			color: ${(props: any) => props.theme.colors.red};
		}
	}

	.icon-cart {
		color: ${(props: any) => props.theme.colors.green};
		font-size: 24px;
		font-weight: 500;

		&.white {
			color: ${(props: any) => props.theme.colors.white};
		}
	}
`;

export default CartIcon;
