<template>
	<FrontPage>
		<header class="page-header">
			<div class="featured-posts">
				<!-- <h2>Featured Posts</h2> -->
				<FeaturedPosts />
			</div>
			<div class="page-header__group">
				<!-- <g-image class="logo" src="~/favicon.png" /> -->
				<h1 class="page-title">Welcome to {{ $page.metaData.siteName }}</h1>
				<div>
					<p>
						Welcome to Developer Bacon, where the content is fresher than a
						piece of bacon.
					</p>
				</div>
			</div>
		</header>

		<section class="recent-posts">
			<h2 id="recent-articles">Recent Articles</h2>
			<ul class="post-list">
				<li v-for="edge in $page.posts.edges" :key="edge.node.id">
					<Post class="post" :post="edge.node" />
				</li>
			</ul>
		</section>

		<section class="main-content main">
			<h2>What this site is all about</h2>
			<p>
				This site was made to spread my knowledge of web development and other
				tech to the world.
			</p>
		</section>

		<section class="main-content main">
			<h2>The Developer of the Bacon</h2>
			<article class="h-card" rel="author"></article>
		</section>
	</FrontPage>
</template>

<page-query>
query Home($page:Int) {
  metaData {
    siteUrl
		description
		siteName
  },
  posts: allPost(perPage: 6,page:$page,filter: { published: { eq: true }}) {
		pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        featured
        path
        tags {
          id
          title
          path
        }
        date (format: "MMM D, YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10, quality: 75)
        cover_alt
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
// import { Pager } from "gridsome";
import Post from "~/components/Post.vue";
import FrontPage from "~/layouts/FrontPage.vue";
import FeaturedPosts from "~/components/FeaturedPosts.vue";
// import $ from "jquery";

export default {
	components: {
		// Pager,
		Post,
		FrontPage,
		FeaturedPosts
	},
	// mounted: function() {
	// 	$(document).ready(() => {
	// 		console.log($(".pagination-link").attr("href"));
	// 		$(".pagination-link").attr("href") += "#recent-articles";
	// 	})
	// },
	metaInfo() {
		return {
			title: "",
			meta: [
				{
					name: "description",
					content: this.$page.metaData.description
				},
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: this.$page.metaData.siteUrl },
				{ property: "og:title", content: this.$page.metaData.siteName },
				{
					property: "og:description",
					content: this.$page.metaData.description
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
h1 {
	text-align: center;
}
.logo {
	width: 5rem;
}
.page-header {
	// height: 65vh;
	height: 40rem;
	display: grid;
	grid-template-columns: 50% 50%;

	@include break(md) {
		grid-template-columns: 100%;
		height: 50rem;
	}
}
.page-header__group {
	// position: absolute;
	height: 10rem;
	margin-top: 10rem;
	max-width: 100%;

	@include break(md) {
		grid-row: 1;
		margin-top: 1rem;
	}
}
.page-title {
	text-align: right;
	margin-right: 2rem;
}

.main .featured-posts {
	margin-top: 3rem;
}
.recent-posts {
	position: relative;
	background: $off-black;
	width: calc(100% + 1rem);
	left: -1rem;
	padding: 1rem 0;

	.post-list {
		left: 0;
		width: 100%;
	}

	h2 {
		margin-left: 1rem;
	}

	// &::before {
	//   content: "";
	//   display: block;
	//   position: absolute;
	//   height: 100%;
	//   left: -1.3vw;

	//   @media all and (min-width: 2000px){
	//     left: calc(-10rem - 50%);
	//   }
	// }
}
</style>
