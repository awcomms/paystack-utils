import { SECRET_PAYSTACK_TEST } from "$lib/env";

export const tr = ({bank_code}: {bank_code: string}) => {
    const body = {
        type: "nuban",
        name: "Mubarak Agada",
        account_number: "0619692229",
        bank_code,
    }
    return fetch('https://api.paystack.co/transferrecipient', {
        headers: {
            "Authorization": `Bearer ${SECRET_PAYSTACK_TEST}`,
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(body)
    })
}

export const bank_codes = () => {
    return fetch('https://api.paystack.co/bank', {
        headers: {
            "Authorization": `Bearer ${SECRET_PAYSTACK_TEST}`
        }
    }).then(async(r) => await r.text());
}