<template>
	<aside class="sidebar">
		<div class="sidebar-list">
			<h2>
				Position of where you are on this page based on the header anchors
			</h2>
			<!-- @loadstart="displayAnchors" -->
			<ul id="anchorList"></ul>
			<!-- <button @click="forceUpdate">Update</button> -->
		</div>
	</aside>
</template>

<script>
import $ from "jquery";
// import Vue from 'vue';

export default {
	methods: {
		// 	displayAnchors: function (e) {
		// 		$(document).ready(() => {
		// 		console.log("this is a new page");
		// 		// 	var $i = $('.content [id]');
		// 		// 	$('#anchorList').empty();
		// 		// 	for(var i = 0; i < $i.length; i++ ) {
		// 		// 		$('#anchorList').append("<li><a href='#"+ $i[i].id +"'>" + $i[i].innerHTML + "</a></li>")
		// 		// 	}
		// 		})
		// 	}
		forceUpdate() {
			// https://michaelnthiessen.com/force-re-render
			return this.$forceUpdate();
		}
	},
	watch: {
		displayAnchors: function() {
			$(document).ready(() => {
				console.log("this is a new page");
				// 	var $i = $('.content [id]');
				// 	$('#anchorList').empty();
				// 	for(var i = 0; i < $i.length; i++ ) {
				// 		$('#anchorList').append("<li><a href='#"+ $i[i].id +"'>" + $i[i].innerHTML + "</a></li>")
				// 	}
			});
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
		max-width: 17rem;
	}
	@media all and (max-width: 1200px) {
		right: -18rem;
		opacity: 0;
		display: none;
	}
}
.sidebar-list {
	position: sticky;
	top: 1rem;
}
</style>
