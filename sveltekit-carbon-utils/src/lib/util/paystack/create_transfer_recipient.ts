import { paystack } from './index.js';
import type { Currency } from './currencies.js';

export const create_transfer_recipient = ({
	name,
	number,
	bank,
	currency
}: {
	name: string;
	number: string;
	bank: string;
	currency: Currency;
}) => {
	paystack.post('/transferrecipient', { type: 'mobile_money', name, number, bank, currency }); //TODO! type
};
