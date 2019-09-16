<template>
	<aside class="sidebar">
		<div class="sidebar-list">
			<!-- <h2>Position of where you are on this page based on the header anchors</h2> -->
			<!-- @loadstart="displayAnchors" -->
			<h2 class="small">On this page:</h2>
			<ul id="anchorList" v-html="this.list"></ul>
			<!-- <button @click="forceUpdate">Update</button> -->
		</div>
	</aside>
</template>

<page-query>
query($path:String) {
	post(path:$path) {
		content
	}
}
</page-query>

<script>
// import $ from "jquery";
// import Vue from 'vue';

export default {
	data() {
		return {
			list: ""
		};
	},
	mounted(e) {
		this.anchors();
	},
	methods: {
		anchors() {
			this.list = "";
			const regex = new RegExp("(?:<h[2-6][^>]*>(?:.+?)\<\/h[2-6]>)", "ig");
			if (this.$page.post.content.match(regex) != "") {
				const content = this.$page.post.content.match(regex);
				// console.log(content);
				if (content != undefined && content != null && content != "") {
					for (var i = 0; i < content.length; i++) {
						this.list += content[i]
							.replace("\\", "")
							.replace("h2", "li")
							.replace("h3", "li")
							.replace("id", "aria-label");
					}
				}
			}
		}
	},
	watch: {
		$route(to, from) {
			this.anchors();
		}
	}
};
</script>

<style lang="scss" scoped>
.sidebar {
	position: absolute;
	left: calc(50vw + 42rem);
	width: 20rem;
	max-width: 14vw;
	height: 100%;

	@media all and (max-width: 2000px) {
		right: 3rem;
		left: unset;
		transition: right 0.3s;
	}
	@media all and (max-width: 1700px) {
		max-width: 15vw;
		width: 22rem;
		right: 1vw;
	}
	@media screen and (max-width: 1600px) {
		max-width: 18vw;
	}
	@media all and (max-width: 1350px) {
		right: -18rem;
		opacity: 0;
		display: none;
	}
}
.sidebar-list {
	position: sticky;
	top: 1rem;
}
.small {
	font-size: 13pt;
}
</style>

<style lang="scss">
#anchorList {
	list-style: none;
	line-height: 1.75;
	text-transform: uppercase;
	padding-left: 1.5rem;
	// border-left: 1px solid rgba(255, 255, 255, 0.3);
	border-left: 1px solid var(--accent-background, $white);

	li {
		transition: padding 0.3s ease;
		&:hover,
		&:focus {
			display: inline-block;
			// padding-top: 0.2rem;
			// padding-bottom: 0.5rem;
		}
	}
}
</style>
