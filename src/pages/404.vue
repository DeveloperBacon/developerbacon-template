<template>
	<Layout>
		<!-- <SidebarLeft/> -->
		<section class="main-content main">
			<h1>404 - the page you are looking for could not be located</h1>
			<p>
				The page that you are looking for could not be located. If you are
				looking for something specific then make a
				<g-link to="/search">search</g-link>, or you can see all the posts from
				the <g-link to="/">home page</g-link>
			</p>
			<p>
				Alternatively, you can search for some bacon pictures on your favorite
				search engine and maybe make some bacon afterward when you get hungry
				from looking at pictures of bacon.
			</p>
		</section>
	</Layout>
</template>

<page-query>
query About {
  metaData {
    siteUrl
  }
}
</page-query>

<script>
// import SidebarLeft from '~/components/SidebarLeft.vue';
export default {
	components: {
		// SidebarLeft
	},
	metaInfo: {
		title: "404 |",
		meta: [
			// { name: 'description', content: "Find all you want about the developer and website it self here." },
			{ property: "og:type", content: "404" },
			{ property: "og:title", content: "404 | Developer Bacon" }
			// { property: 'og:description', content: "Find all you want about the developer and website it self here."},
			// { property: 'og:url', content: "https://developerbacon.ca/about"}
		]
	}
};
</script>
