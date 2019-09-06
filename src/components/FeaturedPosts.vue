<template>
	<ul class="post-list post-list--vertical">
		<li v-for="edge in $static.posts.edges" :key="edge.node.id">
			<Post class="post" :post="edge.node" />
		</li>
	</ul>
</template>

<static-query>
query {
  posts: allPost (filter: { featured: { eq: true }}) {
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
        cover_image (width: 770, height: 380, blur: 10)
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
</static-query>

<script>
import Post from "~/components/Post.vue";

export default {
	components: {
		Post
	}
};
</script>

<style lang="scss" scoped>
.post-list {
	max-width: 40rem;
	margin-left: 0;
}
</style>
