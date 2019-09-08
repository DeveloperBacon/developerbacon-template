<template>
	<g-link class="main post-content" :to="post.path">
		<div class="post-image__container">
			<!-- <PostImage /> -->
			<g-image
				class="post-image"
				:src="post.cover_image"
				:alt="post.cover_alt"
				fit="outside"
				role="presentation"
			/>
		</div>
		<!-- <g-image v-if="post.featuredMedia.mimeType === 'image/png'" :src="'~/assets/images/' + post.featuredMedia.slug + '.png'" :alt="post.featuredMedia.altText" width="100" height="100" fit="cover" blur="30" quality="75"/> -->
		<h3 class="post-title" v-html="post.title" />
		<p class="post-info post-text">
			<span>{{ post.date }}</span> |
			<span>{{ post.timeToRead }} min read</span>
		</p>
		<div
			class="post-text"
			v-html="excerpt(post.description) + '&hellip; <span>Read More</span>'"
		/>
	</g-link>
</template>

<static-query>
query Post($path: String) {
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
		cover_image (width: 1000, blur: 20, quality: 60)
    cover_alt
	}
}
</static-query>

<script>
/* wordPressPost(path: $path) {

<static-query>
query Post($path:String) {
  post: wordPressPost(path: $path) {
    title
    path
    excerpt
    featuredMedia {
      sourceUrl
      altText
      mimeType
      slug
      mediaDetails {
        sizes {
          medium {
            width
            sourceUrl
          }
          mediumLarge {
            width
            sourceUrl
          }
          large {
            width
            sourceUrl
          }
        }
      }
    }
  }
}
</static-query>     
   }*/
// import PostImage from "~/components/PostImage.vue"
export default {
	// components: {
	//   PostImage
	// },
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	methods: {
		excerpt(value) {
			if (value != "") {
				if (value.length > 150) {
					return value.substr(0, 150) + "...";
				} else {
					return value;
				}
			}
		}
	}
};
</script>

<style lang="scss">
// a {
//   text-decoration: none;
//   color: black;
// }

.post-content {
	margin: 0;
	height: 0;
	display: block;
}

.post-title,
.post-text,
.post-text p {
	margin-top: 0;
	line-height: 1;
	color: $white;
	text-shadow: 1px 1px $black;
}

.post-text {
	text-align: center;
	// display: none;
}

.post-info {
	font-size: 0.8rem;
	color: $gray-light;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.post {
	position: relative;
	height: 10rem;

	.post-image__container {
		width: 100%;
		// height: calc(100% + 1rem);
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		overflow: hidden;
		// float: left;
		// background-color: #faa;
		// background-color: $gray;
	}
	.post-image {
		object-fit: cover;
		opacity: 1;
		left: 0;
		top: 0;
	}

	& .g-image {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0rem;
		left: 0rem;
		transition: 0.3s ease;
	}

	.post-content {
		margin-left: 11rem;
	}
}

.post {
	max-width: 100vw;

	&-title {
		padding-top: 2rem;
		text-align: center;
		transform: translateY(2.5rem);
		transition: transform 0.3s ease;
		margin-bottom: 0.9rem;
	}
	&-image {
		transition: opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease;
	}
	&-text {
		opacity: 0;
		// display: none;
		transition: opacity 0.3s ease, transform 0.3s ease;
		transform: translateY(2rem);
	}
	&:hover,
	&:focus {
		.post-title {
			transform: translateY(0);
		}
		.post-image {
			opacity: 0.6;
			transform: scale(1.05);
			filter: blur(3px);
		}
		.post-text {
			// display: block;
			transform: translateY(0);
			opacity: 1;
		}
	}
}
</style>
