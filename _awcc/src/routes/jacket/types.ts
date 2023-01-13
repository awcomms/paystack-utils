export interface JacketOrder {
    address: string,
    email: string,
    phone: number,
    name: string,
    sizes: Sizes,
    delivered: boolean
}

export interface SearchOptions {
    sizes?: SizeSearch,
    delivered?: boolean
}

export interface SizeSearch {
    sizes: Sizes,
    join: "And" | "Or"
}

export interface Sizes {
	early_years?: number;
	junior?: number;
	intermediate?: number;
	senior?: number;
}