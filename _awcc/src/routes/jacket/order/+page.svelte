<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { TextInput, NumberInput, Row, FluidForm, Column, Button } from 'carbon-components-svelte';
	import { http } from '$lib/util';
	import { PAYSTACK } from '$lib/env';
	import Sizes from '$lib/components/JacketOrder/Sizes.svelte';

	var status;

	let options = {
		address: '',
		phone: '',
		email: '',
		name: '',
		sizes: {
			early_years: 0,
			junior: 0,
			intermediate: 0,
			senior: 0
		},
		pay: ''
	};

	const after_pay = async (pay: string) => {
		console.log('paid');
		status = 'confirming payment';
		options.pay = pay;
		await http({ JacketOrder: { New: { options } } })
			.then((r) => {
				console.log(r);
				console.log('success');
				alert('success');
				status = 'order successfully placed';
				// status = 'placing order';
				// http({ JacketOrder: { New: { options } } })
				// 	.then(() => alert('order placed'))
				// 	.then(() => {
				// 	})
				// 	.catch(() => {
				// 		status = 'error creating order';
				// 	});
			})
			.catch(() => {
				alert('error');
				status = 'error creating order';
			});
	};

	const send = async () => {
		let ref = uuidv4();
		let handler = PaystackPop.setup({
			key: PAYSTACK,
			email: options.email,
			amount: 3700,
			ref,
			metadata: options,
			callback: () => after_pay(ref)
		});
		handler.openIframe();
	};
</script>

<svelte:head>
	<script src="https://js.paystack.co/v1/inline.js"></script>
</svelte:head>

<h2>Order the Jacket</h2>

<FluidForm on:submit={send}>
	<TextInput bind:value={options.address} labelText="Delivery address" />
	<TextInput bind:value={options.email} type="email" labelText="Contact email" />
	<TextInput bind:value={options.phone} type="tel" labelText="Contact phone number" />
	<TextInput bind:value={options.name} labelText="Contact name" />
</FluidForm>

<Sizes bind:sizes={options.sizes} />

<Button on:click={send}>Place order</Button>
