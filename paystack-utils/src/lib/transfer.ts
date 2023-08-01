import { v4 } from 'uuid';
import { create_transfer_recipient } from './create_transfer_recipient.js';
import type { AxiosInstance } from 'axios';
import type { Currency } from './currencies.js';

export const transfer = async ({
	name,
	number,
	bank,
	amount,
	reason,
	currency,
	paystack
}: {
	name: string;
	number: string;
	bank: string;
	amount: number;
	currency: Currency;
	reason?: string;
	paystack: AxiosInstance;
}): Promise<string> => {
	const reference = v4();
	await paystack.post('/transfer', {
		source: 'balance',
		amount,
		reference,
		recipient: create_transfer_recipient({ currency, name, number, bank }),
		reason
	});
	return reference;
};
