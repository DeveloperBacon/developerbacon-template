<template>
	<transition name="header" appear>
		<header class="header">
			<strong>
				<!-- <g-link to="/">
					<g-image src="~/favicon.png" class="logo-link"></g-image>
				</g-link> -->
				<g-link class="logo-link" accesskey="h" to="/">{{
					$static.metaData.siteName
				}}</g-link>
			</strong>
			<nav class="nav">
				<g-link
					class="nav__link"
					v-for="link in links"
					:accesskey="link.hotkey"
					:key="link.id"
					:to="link.to"
					>{{ link.title }}</g-link
				>
				<!-- <g-link v-if="loggedIn == false" class="button-reset button nav__link" to="/login"
					>Login</g-link
				>
				<g-link v-if="loggedIn == true" class="button-reset nav__link" to="/profile"
					>Profile</g-link
				>
				<button v-if="loggedIn == true" class="button-reset button nav__link" @click="logOut">
					Logout
				</button> -->
			</nav>
			<div class="nav__background nav__background-1"></div>
			<div class="nav__background nav__background-2"></div>
			<button
				aria-label="Menu Hamburger Button"
				class="nav-ham"
				@click="toggleNav"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</header>
	</transition>
</template>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>

<script>
import anime from "animejs/lib/anime";
import $ from "jquery";

export default {
	data() {
		return {
			// search: "",
			// loggedIn: false,
			links: [
				// {
				// 	title: "Home",
				// 	to: "/",
				// 	hotkey: "h",
				// 	id: 0
				// },
				{
					title: "Search",
					to: "/search",
					hotkey: "s",
					id: 1
				},
				{
					title: "About",
					to: "/about",
					hotkey: "a",
					id: 2
				},
				{
					title: "Contact",
					to: "/contact",
					hotkey: "c",
					id: 3
				}
				// {
				// 	title: 'Login',
				// 	to: '/login',
				// 	button: true,
				// 	id: 3,
				// },
			]
		};
	},
	methods: {
		toggleNav: () => {
			$(".nav-ham, .nav-ham span").toggleClass("is-active");
			if ($(".nav").hasClass("is-active")) {
				anime({
					targets: ".nav",
					duration: 400,
					easing: "easeInOutSine",
					right: [0, "-15rem"],
					complete: () => {
						$(".nav").removeClass("is-active");
					}
				});
				anime({
					targets: ".nav__background",
					delay: 150,
					duration: 400,
					easing: "easeInOutSine",
					// right: ["-20vw",'-100vw'],
					right: ["0rem", "-18rem"],
					complete: () => {
						$(".nav__background").removeClass("is-active");
					}
				});
			} else {
				anime({
					targets: ".nav:not(.is-active)",
					duration: 400,
					delay: 150,
					easing: "easeInOutSine",
					right: ["-15rem", 0],
					begin: () => {
						$(".nav").addClass("is-active");
					}
				});
				anime({
					targets: ".nav__background:not(.is-active)",
					duration: 400,
					easing: "easeInOutSine",
					// right: ['-100vw',"-20vw"],
					right: ["-18rem", "0rem"],
					begin: () => {
						$(".nav__background").addClass("is-active");
					}
				});
			}
		}
	}
};
</script>

<style lang="scss">
.nav-ham {
	display: none;
	z-index: 2;
}
.nav__background {
	display: none;
}
@include break(md) {
	.nav {
		display: none;

		&.is-active {
			display: flex;
			flex-direction: column;
			padding: 8rem 2rem 70vh 1rem;
			justify-content: space-around;
			text-align: right;
			position: absolute;
			background-color: $off-black;
			// border-left: .5rem solid $red;
			color: $white;
			top: 0;
			height: 100vh;
			width: 15rem;
			z-index: 3;
			box-shadow: $box-shadow;

			form {
				input {
				}
				[type="submit"] {
				}
			}

			a,
			button,
			input,
			input::placeholder {
				color: $white;
				border-color: $white;
			}
		}
	}
	.nav__background-1,
	.nav__background-2 {
		&.is-active {
			display: block;
			z-index: 2;
			background-color: $gray;
			box-shadow: $box-shadow;
			top: 0;
			// right: 0;
			// opacity: .3;
			height: 100vh;
			// width: 100vw;
			width: 18rem;
			position: absolute;
		}
	}
	// .nav__background-2 {
	// 	&.is-active {
	// 		background-color: $accent-color;
	// 		// right: 0;
	// 		// opacity: .3;
	// 		height: 100vh;
	// 		// width: 100vw;
	// 		width: 16.5rem;
	// 		position: absolute;
	// 	}
	// }

	.nav-ham {
		display: block;
		background: none;
		border: none;
		outline: none;
		height: 3rem;
		width: 3rem;
		position: absolute;
		right: 1rem;
		top: 0.2rem;
		z-index: 3;

		span {
			border: 1px solid $white;
			height: 0;
			width: 2rem;
			display: block;
			margin: 0.6rem 0 0.6rem auto;
			transform-origin: center right;
			transition: 0.3s;
		}

		& .is-active {
			&:first-child {
				transform-origin: center right;
				transform: rotate(-45deg);
			}

			&:nth-of-type(2) {
				width: 0;
				opacity: 0;
			}
			&:last-child {
				transform-origin: center right;
				transform: rotate(45deg);
			}
		}
	}
}
</style>
