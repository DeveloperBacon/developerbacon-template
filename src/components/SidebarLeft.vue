<template>
	<aside class="sidebar">
		<div class="sidebar-list">
			<p>
				This website was made because of my passion to create websites, and
				learn. This website fulfills both of these passions.
			</p>
			<p>
				Learn more <g-link to="/about">about me</g-link>, or check out my other
				passions from on my portfolio at
				<a target="_blank" rel="author external" href="https://brettanda.ca"
					>brettanda.ca</a
				>
			</p>
			<h2 class="recent__title">Recent Posts</h2>
			<ul class="recent">
				<li
					class="recent__item"
					v-for="edge in $static.posts.edges"
					:key="edge.node.id"
				>
					<g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
				</li>
			</ul>
			<p>All of these posts were made with love on a pan with bacon greese.</p>
			<!-- <h2>Ads</h2>
			<ul class="ad-list">
				<li>Ad 1</li>
				<li>Ad 2</li>
				<li>Ad 3</li>
			</ul> -->
		</div>
	</aside>
</template>

<static-query>
query Sidebar {
  posts: allPost(perPage:5) {
    edges {
      node {
        path
        title
        id
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.sidebar {
	position: absolute;
	left: calc(50vw - 60rem);
	top: 0;
	width: 20rem;
	max-width: 14vw;
	height: 100%;

	@media all and (max-width: 2000px) {
		left: 2vw;
		transition: left 0.3s;
	}
	@media all and (max-width: 1700px) {
		max-width: 15vw;
		width: 22rem;
		left: 1vw;
	}
	@media screen and (max-width: 1600px) {
		max-width: 17rem;
	}
	@include break(md) {
		// left: -18rem;
		left: 0;
		position: relative;
		width: 80%;
		padding: 0 1rem;
		max-width: unset;
		margin: 0 auto 2rem auto;

		&::before {
			content: "";
			display: block;
			border-top: 1px solid $gray;
			width: 100%;
			height: 0;
			transform: translateY(-1rem);
		}
	}
	@include break(sm) {
		width: 90%;
	}
	@media all and (max-width: 600px) {
		width: 95%;
		padding: 0 0.5rem;
	}
	@media all and (max-width: 400px) {
		padding: 0;
	}
}
.sidebar-list {
	position: sticky;
	top: 1rem;

	@include break(md) {
		position: relative;
		top: unset;
	}
}
.sidebar__title {
	margin-top: 0.3rem;
}
.recent {
	padding-left: 0.2rem;

	.recent__item {
		list-style: none;
		margin-bottom: 0.5rem;
		// font-weight: bold;
	}
}

.ad-list {
	list-style: none;
	padding-left: 0;

	li {
		background: $gray;
		margin: 1rem 0;
	}
}
</style>
