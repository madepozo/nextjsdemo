import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

interface IProps {
	currentRating: number;
	numberOfStars?: number;
}

const StarRating = (props: IProps) => {
	const { currentRating, numberOfStars = 5 } = props;

	return (
		<StarRatingStyled>
			{[...Array(numberOfStars).keys()].map((n, i) => (
				<span
					className={`star ${currentRating >= i + 1 ? 'active' : ''}`}
					key={i + 1}
					data-value={i + 1}
				>
					&#9733;
				</span>
			))}
		</StarRatingStyled>
	);
};

const StarRatingStyled = styled.div`
	.star {
		color: ${(props: any) => props.theme.colors.light_gray};
		font-size: 12px;
		margin: 0 1px;

		&.active {
			color: ${(props: any) => props.theme.colors.red};
		}
	}
`;

export default StarRating;
