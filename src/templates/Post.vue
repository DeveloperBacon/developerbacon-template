<template>
	<Layout>
		<SidebarRight />
		<!-- @beforeLeave="beforeLeave"
      @enter="enter" -->
		<transition name="page" @afterEnter="afterEnter" appear>
			<header class="main-content main content__header">
				<div v-if="$page.post.cover_image" class="header-image__container">
					<g-image
						class="header-image"
						:src="$page.post.cover_image"
						:alt="$page.post.cover_alt"
						role="presentation"
					/>
				</div>
				<h1>{{ $page.post.title }}</h1>
				<aside class="info">
					<span
						>Posted on: <time>{{ $page.post.date }}</time></span
					>
					|
					<span>{{ $page.post.timeToRead }} min read</span>
				</aside>
				<template v-if="$page.post.tags.length > 0">
					<ul class="list tags">
						<li><p>Tags:&nbsp;</p></li>
						<li v-for="(tag, index) in $page.post.tags" :key="tag.id">
							<g-link :to="tag.path">{{ tag.title }}</g-link>
							<span v-if="index > -1 && index != $page.post.tags.length - 1"
								>,</span
							>
						</li>
					</ul>
				</template>
			</header>
		</transition>
		<transition name="page" @afterEnter="afterEnter" appear>
			<section class="main-content main content" v-html="$page.post.content">
				<!-- <template v-if="$page.wordPressPost.categories.length">
          <h4>Posted in</h4>
          <ul class="list categories">
            <li v-for="category in $page.wordPressPost.categories" :key="category.id" >
              <g-link :to="category.path">{{ category.title }}</g-link>
            </li>
          </ul>
        </template> -->
				<!-- <Pagination :page="$page.post"/> -->
			</section>
		</transition>
		<SidebarLeft />
		<aside class="main main-content">
			<!-- To find out to set up the Disqus comments check out the README.md file in /templates/README.md -->
			<vue-disqus
				class="dark-theme"
				shortname=""
				:identifier="$page.post.id"
			></vue-disqus>
		</aside>
	</Layout>
</template>

<page-query>
query Post ($path: String) {
  meta: metaData {
    siteUrl
  }
	post: post(path: $path) {
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
		cover_image (width: 1300, blur: 10, quality:90)
    cover_alt
	}
}
</page-query>

<script>
// import Pagination from "~/components/PostPagination.vue"
import SidebarLeft from "~/components/SidebarLeft.vue";
import SidebarRight from "~/components/SidebarRight.vue";
// import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css";
// import PostImage from "~/components/PostImage.vue";

export default {
	metaInfo() {
		return {
			title: this.$page.post.title + " |",
			meta: [
				{ name: "description", content: this.$page.post.description },
				{
					name: "title",
					content: this.$page.post.title + " | Developer Bacon"
				},
				{ property: "og:type", content: "article" },
				{
					property: "og:title",
					content: this.$page.post.title + " | Developer Bacon"
				},
				{ property: "og:description", content: this.$page.post.description },
				{
					property: "og:url",
					content: this.$page.meta.siteUrl + this.$page.post.path
				},
				{
					property: "og:image",
					content: this.$page.meta.siteUrl + this.$page.post.cover_image.src
				},
				{
					property: "og:image:type",
					content: this.$page.post.cover_image.mimeType
				},
				{
					property: "og:image:width",
					content: this.$page.post.cover_image.size.width
				},
				{
					property: "og:image:height",
					content: this.$page.post.cover_image.size.height
				},
				{ property: "og:image:alt", content: this.$page.post.cover_alt },
				{
					rel: "canonical",
					content: this.$page.meta.siteUrl + this.$page.post.path
				},
				{
					property: "twitter:description",
					content: this.$page.post.description
				},
				{
					property: "twitter:title",
					content: this.$page.post.title + " | Developer Bacon"
				},
				{
					property: "twitter:url",
					content: this.$page.meta.siteUrl + this.$page.post.path
				},
				{
					property: "twitter:card",
					// content: "summary_large_image"
					content: "summary"
				},
				{
					property: "twitter:image",
					content: this.$page.meta.siteUrl + this.$page.post.cover_image.src
				}
			]
		};
	},
	components: {
		// Pagination,
		SidebarLeft,
		SidebarRight
		// PostImage
	},
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

<style lang="scss" scoped>
h1 {
	margin-bottom: 0.25rem;
	letter-spacing: 1px;
}

ul.list {
	list-style: none;
	padding: 0;
}
ul.list li {
	display: inline-block;
	margin-right: 0.25em;
}
ul.list.tags li a {
	// padding: 0.25em 0.5em;
	// background-color: $gray;
	// color: $white;

	&:hover,
	&:focus {
		color: $white;
	}
}
.dark-theme {
	background: var(--dark-theme, $black);
	@media (prefers-color-scheme: light) {
		& {
			padding: 0 1rem;
		}
	}
}
.tags {
	float: right;
	margin-top: 0;
	p {
		text-transform: uppercase;
	}

	@media screen and (max-width: 600px) {
		float: unset;
	}
}
ul.list.categories li:after {
	content: ",";
	display: inline-block;
}
ul.list li:last-child:after {
	content: "";
}
.info {
	font-size: 0.9rem;
	text-transform: uppercase;
	color: $gray;
	letter-spacing: 1px;
	margin-top: 0;
	display: inline-block;
	width: 50%;
	@media screen and (max-width: 600px) {
		width: 100%;
	}
}
.header-image {
	width: 100%;
	max-height: 30rem;
	max-width: 100%;
	height: auto;
	display: block;
	margin: 0 auto;
	object-fit: cover;

	@media all and (max-width: 600px) {
		position: relative;
		left: -1.3rem;
		width: 100vw;
		max-width: unset;
	}

	@media all and (max-width: 400px) {
		left: -1rem;
		width: calc(100vw + 0.5rem);
	}
}
.header-image__container {
	background-color: $gray;
	margin-bottom: 1rem;
	// max-height: 10rem;
	// box-shadow: inset 0px 0px 5px $black;
}
.content__header {
	// margin-top: 2rem;
	&::after {
		content: "";
		display: block;
		height: 0;
		border: 0.05rem solid var(--accent-color, $accent-color);
		width: 10rem;
		transform: translateY(0.5rem);
	}
}
</style>
