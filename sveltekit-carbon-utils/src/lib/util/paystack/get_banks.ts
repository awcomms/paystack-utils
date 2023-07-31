import { paystack } from "./index.js";
import type { Currency } from "./currencies.js";

export const get_banks = (c: Currency) => paystack.get(`/bank?currency=${c}`)