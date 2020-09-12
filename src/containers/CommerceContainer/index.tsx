import { useEffect } from 'react';
import styled from '@emotion/styled';

import { db } from '../../config/firebase-config';
import { Commerce } from '../../models/Commerce.model';
import BannerSection from './BannerSection';
import Cart from '../../components/Cart';
import Categories from './Categories';
import Products from './Products';

interface Props {
	commerce: Commerce;
	url: string;
}

const CommerceContainer = (props: Props) => {
	const { data, product } = props.commerce;
	const { name, whatsappNumber } = data;

	useEffect(() => {
		(() => {
			console.log(props.url);
			db.ref(props.url).on('value', (data) => {
				console.log('Data >', data);
			});
		})();
	}, []);

	const commerceInfo = {
		phone: whatsappNumber
	};

	return (
		<CommerceContainerStyled>
			<h2 className="commerce-title bold">{name}</h2>
			<div className="commerce-content flex row">
				<main className="main">
					<BannerSection commerceInfo={commerceInfo} />
					<Categories total={product.length} />
					<Products data={product} />
				</main>
				<Cart />
			</div>
		</CommerceContainerStyled>
	);
};

const CommerceContainerStyled = styled.section`
	padding: 10px 60px;
	background: ${(props) => props.theme.colors.light_gray};

	.commerce-title {
		background: ${(props) => props.theme.colors.white};
		display: flex;
		align-items: center;
		justify-content: center;
		height: 58px;
		border-radius: 12px;
		box-shadow: 0 2px 12px 0 rgba(230, 230, 230, 0.5);
		text-transform: capitalize;
		color: ${(props) => props.theme.colors.red};
	}

	.commerce-content {
		margin-top: 11px;
	}

	.main {
		flex: 1;
		margin-right: 12px;
	}
`;

export default CommerceContainer;
