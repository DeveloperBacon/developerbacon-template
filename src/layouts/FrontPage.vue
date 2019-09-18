<template>
	<main class="layout">
		<!-- @enter="enter"
      @beforeLeave="beforeLeave" -->
		<!-- <transition name="page" @afterEnter="afterEnter" appear> -->
		<!-- <main class="main"> -->
		<slot />
		<!-- </main> -->
		<!-- </transition> -->
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
		// Re-enable when gridsome supports enter and leaving transitions
		//
		// beforeLeave(element) {
		//   this.prevHeight = getComputedStyle(element).height;
		// },
		// enter(element) {
		//   const { height } = getComputedStyle(element);

		//   element.style.height = this.prevHeight;

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

<style lang="scss" scoped>
img {
	max-width: 100%;
}

.layout {
}

.main {
	padding: 0 0 0 1rem;
	padding-bottom: 1rem;

	& :first-child {
		margin-top: 0;
	}

	& :last-child {
		margin-bottom: 0;
	}
}
</style>
