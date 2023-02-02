<script>
	import { Row, Column, Link } from 'carbon-components-svelte';
	import { Email, Location, Phone } from 'carbon-icons-svelte';
	import FooterColumn from './FooterColumn.svelte';
</script>

<footer>
	<div class="footer-inner">
			<Row>
				<FooterColumn>
					<div class="link"><Phone /> <Link href="tel:+2348184320763">+2348184320763</Link></div>
					<div class="link">
						<Email />
						<Link href="mailto:+angelwingseducation@gmail.com">angelwingseducation@gmail.com</Link>
					</div>
					<div class="link">
						<Location />
						<Link href="https://goo.gl/maps/WB8xMrD5v5MWf2gw7">Location</Link>
					</div>
				</FooterColumn>
				<!-- <FooterColumn>
						<div><Link href="/about">About</Link></div>
						<div><Link href="/contacts">Contact</Link></div>
						<div><Link href="/about#mission">Vision</Link></div>
				</FooterColumn> -->
			</Row>
	</div>
</footer>

<style lang="scss">
    @use "@carbon/colors";

	.footer-inner {
        color: colors.$white;
        background-color: colors.$gray-100;
		padding: 1rem;
	}

    .link {
		display: flex;
		flex-direction: row;
		align-items: center;
        column-gap: 1.369rem;
	}

    .footer {
		padding: 1.369rem;
        width: 100%;
	}
</style>
