import { db } from '../config/firebase-config';

const Index = () => {
	return (
		<div>
			<h2>Index Page!</h2>
		</div>
	);
};

export const getServerSideProps = async () => {
	try {
		const data: any = await new Promise((resolve, reject) => {
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
				commerces: commerces
			}
		};
	} catch (err) {
		console.log('Err >', err);

		return {
			props: { success: false }
		};
	}
};

export default Index;
