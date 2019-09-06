<template>
	<Layout>
		<section class="main">
			<h1>Results for: {{ search }}</h1>
			<form action="/search" method="get" v-on:submit.prevent="" class="search">
				<label class="u-hidden--visually" for="search"
					>Search for your favorite post(s)</label
				>
				<input
					class="search-text"
					id="search"
					name="s"
					accesskey="s"
					list="Posts"
					autocomplete="on"
					autocapitalize="on"
					spellcheck="true"
					type="search"
					placeholder="Search for your favorite post(s)"
					autofocus
					@change="changeUrl(search)"
					v-model="search"
				/>
				<datalist id="Posts">
					<option
						v-for="{ node } in $page.posts.edges"
						:key="node.id"
						:value="node.title"
					/>
				</datalist>
			</form>
			<ul v-if="$page.posts.edges" class="post-list">
				<!-- <li v-for="{ node } in filteredList" :key="node.id"> -->
				<li
					v-for="{ node } in $page.posts.edges"
					:key="node.id"
					v-if="contains(node.title, search)"
				>
					<Post class="post" :post="node" />
				</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div v-else>
				<p>There are no results for this search</p>
			</div>
		</section>
	</Layout>
</template>

<page-query>
query Search {
	posts: allPost {
		edges {
			node {
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
				cover_image (width: 860, blur: 10)
				cover_alt
			}
		}
	}
}
</page-query>

<script>
import Post from "~/components/Post.vue";

export default {
	data() {
		return {
			search: "" + (this.$route.query.s != undefined ? this.$route.query.s : "")
		};
	},
	components: {
		Post
	},
	metaInfo: {
		title: "Search",
		meta: [
			{
				name: "description",
				content: "The search page for the Developer Bacon website"
			},
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "Search | Developer Bacon" },
			{
				property: "og:description",
				content: "The search page for the Developer Bacon website"
			}
		]
	},
	methods: {
		changeUrl(n) {
			window.history.pushState(
				null,
				null,
				window.location.origin +
				"/search" /*window.location.pathname*/ +
					"?s=" +
					n
			);
		},
		contains(item, text) {
			if (item.toLowerCase().includes(text.toLowerCase())) {
				return item;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
h1 {
	text-align: center;
}
.post-list {
	width: calc(100% + 2rem);
}
.search {
	margin: 0 auto;
	width: 20rem;
	max-width: calc(100vw - 2rem);
	display: block;
	margin-bottom: 2rem;
}
.search-text {
	color: $white;
}
</style>
