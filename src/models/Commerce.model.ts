import { Product } from './Product';

export interface Commerce {
	banners: Object;
	data: CommerceData;
	facebookLive: Object;
	header: Object;
	product: Product[];
	promotions: Object[];
}

export interface CommerceData {
	address?: string;
	name: string;
	phone: string;
	whatsappNumber?: string;
	slug: string;
	urlImage?: string;
}
