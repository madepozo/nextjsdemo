import Link from 'next/link';

import { db } from '../config/firebase-config';

const HomePage = ({ commerces = [] }) => {
	return (
		<div>
			<ul>
				{commerces.map((commerce, index) => (
					<li key={`Home-commerces-${commerce.name}-${index}`}>
						{
							<Link
								href="/comercios/[commerceSlug]"
								as={`/comercios/${commerce.slug}`}
							>
								<a>{commerce.name}</a>
							</Link>
						}
					</li>
				))}
			</ul>
		</div>
	);
};

export const getServerSideProps = async () => {
	const data = await db
		.ref('/companies/489/0501662316001/commerces')
		.once('value');
	const commerces = await data.val();

	return {
		props: {
			commerces: Object.keys(commerces)
				.map((key) => {
					const { name, slug = '' } = commerces[key].data;

					return { name, slug };
				})
				.filter((commerce) => !!commerce.slug)
		}
	};
};

export default HomePage;
