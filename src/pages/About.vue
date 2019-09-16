<template>
	<Layout>
		<section class="main-content main">
			<h1>About Developer Bacon</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam
				corrupti quos at officiis illo quod vitae dolorem harum minus
				perferendis fugit ratione iure itaque unde maxime blanditiis, omnis ut.
			</p>
		</section>
		<SidebarLeft />
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
import SidebarLeft from "~/components/SidebarLeft.vue";
export default {
	components: {
		SidebarLeft
	},
	metaInfo: {
		title: "About the author |",
		meta: [
			{
				name: "description",
				content:
					"Find all you want about the developer and website it self here."
			},
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "About the author | Developer Bacon" },
			{
				property: "og:description",
				content:
					"Find all you want about the developer and website it self here."
			},
			{ property: "og:url", content: "https://developerbacon.ca/about" }
		]
	}
};
</script>
