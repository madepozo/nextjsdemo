import { db } from '../../config/firebase-config';
import { Commerce } from '../../models/Commerce.model';
import CommerceContainer from '../../containers/CommerceContainer';

interface IProps {
	commerce: Commerce;
	url: string;
}

const CommercePage = (props: IProps) => <CommerceContainer {...props} />;

export const getServerSideProps = async ({ query }) => {
	const { commerceSlug } = query;
	const baseUrl = '/companies/489/0501662316001/commerces';
	const data = await db.ref(baseUrl).once('value');
	const commerces = await data.val();
	let commerceKey = '';
	let commerce = {};

	Object.keys(commerces).some((key) => {
		if (commerces[key].data.slug === commerceSlug) {
			commerce = commerces[key];
			commerceKey = key;
			return true;
		}

		return false;
	});

	return {
		props: {
			commerce,
			url: `${baseUrl}/${commerceKey}`
		}
	};
};

export default CommercePage;
