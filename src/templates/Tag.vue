<template>
	<Layout>
		<section class="main">
			<h1>Tag: {{ $page.tag.title }}</h1>
			<ul class="post-list">
				<li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
					<Post class="post" :post="edge.node" />
				</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<Pager
				:info="$page.tag.belongsTo.pageInfo"
				range="3"
				firstLabel="&lt;&lt; &hellip;"
				lastLabel="&hellip; &gt;&gt;"
				prevLabel="&lt;"
				nextLabel="&gt;"
				linkClass="pagination-link"
			/>
		</section>
	</Layout>
</template>

<page-query>
query Tag ($path: String, $page: Int){
  tag (path: $path) {
    title 
    path
    belongsTo (page: $page, perPage: 9) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Post {
            title
            path
            date (format: "MMM D, YYYY")
            timeToRead
            tags {
              id
              title
              path
            }
            description
            content
            cover_image (width: 860, blur: 10, quality: 75)
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";

export default {
	components: {
		Pager,
		Post
	},
	metaInfo() {
		return {
			title: this.$page.tag.title + " |",
			meta: [
				{
					name: "description",
					content: "A tag search for " + this.$page.tag.title
				},
				{ property: "og:type", content: "article" },
				{
					property: "og:title",
					content: "Tag: " + this.$page.tag.title + " | Developer Bacon"
				},
				{
					property: "og:description",
					content: "A tag search for " + this.$page.tag.title
				},
				{ property: "og:url", content: this.$page.tag.path }
			]
		};
	}
};
</script>

<style lang="scss" scoped>
h1 {
	text-align: center;
}
</style>
