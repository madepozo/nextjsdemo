export interface Product {
	id: number;
	name: string;
	price: number;
	slug: string;
	stock: number;
	discount?: number;
	description?: string;
	[key: string]: number | string;
}
