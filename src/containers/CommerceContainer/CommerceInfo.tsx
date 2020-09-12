import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import WhatsappIcon from '../../components/icons/WhatsappIcon';
import FacebookIcon from '../../components/icons/FacebookIcon';
import InstagramIcon from '../../components/icons/InstagramIcon';

interface Data {
	phone: string;
}

interface IProps {
	data: Data;
}

const CommerceInfo = ({ data }: IProps) => {
	const { phone } = data;
	const businessHours = '9:00 a 18:00';

	return (
		<CommerceInfoStyled>
			<h3 className="title bold">Primera tienda monomarca en el país.</h3>
			<div className="business-hours">
				<span className="label">Horario de atención</span>
				<p className="time semi-bold">{businessHours}</p>
			</div>
			<button className="whatsapp">
				<span className="label">Whatsapp</span>
				<WhatsappIcon />
				<span className="number semi-bold">{phone}</span>
			</button>
			<Flex className="realtime-info" justifyContent="space-between">
				<Box className="item center">
					<span className="icon-sold"></span>
					<span className="value bold">20</span>
					<span className="label">Pedidos realizados</span>
				</Box>
				<Box className="item center">
					<span className="icon-sale"></span>
					<span className="value bold">10</span>
					<span className="label">Promociones en vivo</span>
				</Box>
			</Flex>
			<div className="social">
				<div className="items">
					<FacebookIcon />
					<InstagramIcon />
				</div>
			</div>
		</CommerceInfoStyled>
	);
};

const CommerceInfoStyled = styled.div`
	position: relative;
	width: 33%;
	padding: 12px;

	.social {
		position: absolute;
		top: calc(50% - 40px);
		right: -16px;

		.items {
			display: flex;
			height: 80px;
			flex-direction: column;
			justify-content: space-between;
		}
	}

	.title {
		color: ${(props) => props.theme.colors.black};
		font-size: 12px;
		text-transform: uppercase;
		margin-bottom: 6px;
	}

	.business-hours {
		margin-bottom: 11px;

		.label {
			color: ${(props) => props.theme.colors.red};
			font-size: 12px;
		}

		.time {
			color: ${(props) => props.theme.colors.black};
			font-size: 14px;
			margin-top: 3px;
		}
	}

	.whatsapp {
		color: ${(props) => props.theme.colors.white};
		max-width: 224px;
		margin-bottom: 9px;
		width: 80%;
		height: 32px;
		border-radius: 5px;
		background-color: #45c354;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.label {
			font-size: 10px;
			line-height: 1.25;
		}
	}

	.realtime-info {
		max-width: 224px;
		width: 80%;

		.item {
			flex-direction: column;
			justify-content: space-around;
			width: 106px;
			height: 87px;
			border-radius: 5px;
			border: solid 1px #f3f3f3;
			padding: 5px 12px;

			[class^='icon-'] {
				font-size: 20px;
				color: ${(props) => props.theme.colors.red};
			}
		}

		.label {
			color: ${(props) => props.theme.colors.black};
			font-size: 10px;
			text-align: center;
			width: 70px;
		}

		.value {
			color: ${(props) => props.theme.colors.red};
			font-size: 18px;
		}
	}
`;

export default CommerceInfo;
