// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

// The info for how to set this up can be found in ./src/pages/README.md
import VueDisqus from "vue-disqus";

import "~/assets/styles/main.scss";
import "~/assets/scripts/main.js";

export default function(Vue, { head }) {
	Vue.component("Layout", DefaultLayout);
	Vue.component("Header", Header);
	Vue.component("Footer", Footer);
	Vue.use(VueDisqus);

	head.bodyAttrs = { class: "typography" };

	// Links
	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css?family=Montserrat:300&display=auto"
	});
	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css?family=Poppins&display=auto"
	});
	head.link.push({
		rel: "home",
		title: "Home",
		href: "/"
	});
	head.link.push({
		rel: "about",
		title: "About",
		href: "/about"
	});
	head.link.push({
		rel: "contact",
		title: "Contact",
		href: "/contact"
	});
	head.link.push({
		rel: "search",
		title: "Search",
		href: "/search"
	});
	head.link.push({
		type: "application/opensearchdescription+xml",
		rel: "search",
		href: "data/opensearch.xml"
	});

	// Meta Tags
	head.meta.push({
		name: "msapplication-TileColor",
		content: "#FF4B39"
	});
	head.meta.push({
		name: "theme-color",
		content: "#FF4B39"
	});
	head.meta.push({
		name: "author",
		content: "Brett Anda"
	});
	head.meta.push({
		property: "og:locale",
		content: "en_CA"
	});
	head.meta.push({
		property: "og:site_name",
		content: "Developer Bacon"
	});

	// No Index
	head.meta.push({
		name: "robots",
		content: "noindex"
	});
	head.meta.push({
		name: "googlebot",
		content: "noindex"
	});
}
