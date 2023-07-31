import type { Currency } from './currencies.js';
import type { AxiosInstance } from 'axios';

export const get_banks = (c: Currency, paystack
    : AxiosInstance) => paystack.get(`/bank?currency=${c}`);
