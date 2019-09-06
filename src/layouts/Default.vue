<template>
	<div class="layout">
		<Header />
		<!-- @beforeLeave="beforeLeave"
      @enter="enter" -->
		<transition name="page" @afterEnter="afterEnter" appear>
			<main>
				<slot />
			</main>
		</transition>
		<Footer />
	</div>
</template>

<script>
export default {
	data() {
		return {
			prevHeight: 0
		};
	},
	methods: {
		// Re-enable when gridsome supports enter and leaving transitions
		//
		// beforeLeave(element) {
		//   this.prevHeight = getComputedStyle(element).height;
		// },
		// enter(element) {
		//   const { height } = getComputedStyle(element);

		//   element.style.height = this.prevHeight;
		//   console.log(this.prevHeight);

		//   setTimeout(() => {
		//     element.style.height = height;
		//   });
		// },
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
