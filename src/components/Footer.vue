<template>
	<footer class="footer">
		<ul>
			<li>
				<!-- class="fa fa-github" -->
				<a
					target="_blank"
					rel="noopener"
					href="https://github.com/brettanda/developerbacon-template"
					>Github</a
				>
			</li>
			<li>
				<g-link to="/about">About</g-link> &nbsp;
				<g-link to="/contact">Contact me</g-link>
			</li>
			<li>{{ $static.metadata.siteName }} &copy; Copy Right Statement here</li>
			<li>
				Website developed and managed by
				<a
					class="link"
					href="https://brettanda.ca/"
					target="_blank"
					rel="noopener"
					>Brett Anda</a
				>
			</li>
		</ul>
	</footer>
</template>

<static-query>
query Footer {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.footer {
	max-width: 100vw;
	display: flex;
	justify-content: space-around;
}
ul {
	list-style: none;
	padding-left: 0;
}
li {
	margin-top: 1rem;
}
.recent {
	line-height: 1.5;
}
a.active {
	color: $accent-color;

	&:hover,
	&:focus {
		color: $text-color;
	}
}
</style>
