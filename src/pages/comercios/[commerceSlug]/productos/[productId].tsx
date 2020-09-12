import { db } from '../../../../config/firebase-config';
import ProductContainer from '../../../../containers/ProductContainer';
import { Commerce } from '../../../../models/Commerce.model';
import { Product } from '../../../../models/Product';

interface IProps {
	product: Product;
	commerceName: string;
}

const ProductPage = (props: IProps) => {
	return <ProductContainer {...props} />;
};

export const getServerSideProps = async ({ query }) => {
	const { commerceSlug, productId } = query;

	const data = await db
		.ref('/companies/489/0501662316001/commerces')
		.once('value');
	const commerces = await data.val();
	let commerce: Commerce;

	Object.keys(commerces).some((key) => {
		if (commerces[key].data.slug === commerceSlug) {
			commerce = commerces[key];
			return true;
		}

		return false;
	});

	let product = {};

	commerce.product.some((prod) => {
		if (prod.id === +productId) {
			product = prod;
			return true;
		}

		return false;
	});

	return {
		props: { product, commerceName: commerce.data.name }
	};
};

export default ProductPage;
