import Link from 'next/link';

import { db } from '../config/firebase-config';

const HomePage = ({ commerces = [], failed }) => {
	if (failed) {
		return <div>We have problems! :(</div>;
	}
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
	console.log('Index > getServerSideProps');
	try {
		const data: any = await new Promise((resolve, reject) => {
			db.ref('/companies/489/0501662316001/commerces')
				.once('value')
				.then((data) => {
					resolve(data);
				});
		});

		console.log('I got the data!');

		const commerces = await data.val();

		console.log('I got the commerces:', Object.keys(commerces));

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
	} catch (err) {
		console.log('Err >', err);
	}

	return {
		props: { failed: true }
	};
};

export default HomePage;
