<!-- src/App.vue -->
<template>
	<Layout>
		<Header />
		<!-- <transition> -->
		<router-view />
		<!-- </transition> -->
		<Footer />
	</Layout>
</template>

<script>
// import Default from '~/layouts/Default.vue'

export default {
	components: {
		// Default
	}
};
</script>
