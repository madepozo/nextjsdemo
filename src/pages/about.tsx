const Abount = ({ numbers }) => {
	return (
		<div>
			<ul>
				{numbers.map((num) => (
					<li key={num}>{num}</li>
				))}
			</ul>
		</div>
	);
};

export const getServerSideProps = async () => {
	const numbers = await new Promise((resolve) => {
		setTimeout(() => {
			const min = Math.ceil(Math.random() * 20);
			const max = Math.ceil(Math.random() * 40) + 20;
			resolve(
				[...Array(max - min).keys()].map((key) => {
					return (key + min) ** 2;
				})
			);
		}, 250);
	});

	return {
		props: {
			numbers
		}
	};
};

export default Abount;
