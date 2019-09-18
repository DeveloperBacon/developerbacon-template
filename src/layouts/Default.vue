<template>
	<main class="layout">
		<slot />
	</main>
</template>

<script>
export default {
	data() {
		return {
			prevHeight: 0
		};
	},
	methods: {
		afterEnter(element) {
			element.style.height = "auto";
		}
	}
};
</script>

<style lang="scss">
img {
	max-width: 100%;
}

.layout,
body {
	max-width: 100vw;
}

main {
	min-height: 40rem;
	position: relative;

	& > :first-child,
	& > aside + * {
		margin-top: 0 !important;
	}
}

.main {
	max-width: 2000px;
	margin: 0 auto;
	padding: 0 1rem;
	padding-bottom: 1rem;

	& :first-child {
		margin-top: 0;
	}

	& :last-child {
		margin-bottom: 0;
	}

	@media screen and (max-width: 600px) {
		padding: 0 0.5rem;
	}
}
</style>
