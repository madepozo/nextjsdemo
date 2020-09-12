import Link from 'next/link';
import { db } from '../config/firebase-config';

const Index = (props) => {
	const { commerces } = props;

	return (
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
	);
};

export async function getServerSideProps() {
	try {
		const data: any = await new Promise((resolve) => {
			db.ref('/companies/489/0501662316001/commerces')
				.once('value')
				.then((data) => {
					resolve(data);
				});
		});
		const value = await data.val();
		const commerces = Object.keys(value)
			.map((key) => {
				const { name, slug = '' } = value[key]?.data;

				return { name, slug };
			})
			.filter((commerce) => commerce.slug);

		return {
			props: {
				commerces,
				success: true
			}
		};
	} catch (err) {
		console.log('Err >', err);

		return {
			props: {
				success: false
			}
		};
	}
}

export default Index;
