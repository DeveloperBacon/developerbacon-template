<template>
	<Layout>
		<SidebarLeft />
		<section class="main-content main">
			<h1>Contact Me</h1>
			<div>
				<p>This is a form</p>
			</div>
			<form action="" method="get" v-on:submit.prevent="sendEmail">
				<div>
					<label class="u-hidden--visually" for="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Name"
						title="Your full name"
						v-model="name"
					/>
					<label class="u-hidden--visually" for="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						title="The email to contact you with"
						v-model="email"
					/>
				</div>
				<div>
					<!-- <label class="u-hidden--visually" for="subject">Subject</label>
					<input
						type="text"
						name="subject"
						id="subject"
						placeholder="Subject"
						title="The subject of contacting"
						v-model="subject"
					/> -->
					<label class="u-hidden--visually" for="type"
						>How do you like your bacon</label
					>
					<select name="bacon" id="bacon" v-model="bacon">
						<option
							label="- How do you like your bacon -"
							value="#"
							selected
							disabled
						>
							- How do you like your bacon -
						</option>
						<option label="I don't like bacon" value="I don't like bacon">
							I don't like bacon
						</option>
						<option
							label="Cooked - In the microwave"
							value="Cooked in the microwave"
							>Cooked - In the microwave</option
						>
						<option label="Cooked - On a pan" value="Cooked on a pan"
							>Cooked - On a pan</option
						>
						<option label="Raw" value="Raw">Raw</option>
					</select>
					<!-- <input type="text" name="subject" id="subject" placeholder="Subject" title="The subject of contating" v-model="subject" required> -->
				</div>
				<label class="u-hidden--visually" for="message">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					v-model="message"
					placeholder="Message"
				></textarea>
				<div>
					<input type="reset" name="reset" id="reset" value="Clear Form" />
					<input type="submit" name="submit" id="submit" value="Send" />
				</div>
			</form>
			<!-- <p
				style="background-color: white; color: black; padding: 1rem;border-radius: .5rem;"
			>
				A new message from <b>{{ this.name }}</b> &lt;<b>{{ this.email }}</b
				>&gt; on developerbacon.ca <br />
				My favorite way to eat bacon is when it is
				<b>{{ this.bacon }}</b
				>. <br />
				Subject: <b>{{ subject }}</b> <br />
				<br />
				<b>{{ this.message }}</b>
			</p> -->
		</section>
	</Layout>
</template>

<page-query>
query About {
  metaData {
    siteUrl
  }
}
</page-query>

<script>
import SidebarLeft from "~/components/SidebarLeft.vue";

export default {
	components: {
		SidebarLeft
	},
	metaInfo: {
		title: "Contact |",
		meta: [
			{
				name: "description",
				content: "If you want to contact me, this is the place to do so."
			},
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "Contact | Developer Bacon" },
			{
				property: "og:description",
				content: "If you want to contact me, this is the place to do so."
			},
			{
				property: "og:url",
				content: "https://developerbacon.ca/contact`"
			}
		],
		script: [{ src: "https://smtpjs.com/v3/smtp.js" }]
		// link: [
		//   { rel: 'stylesheet', href: 'assets/static/node_modules/prismjs/themes/prism.css'}
		// ]
	},
	data() {
		return {
			errors: [],
			name: "",
			email: "",
			message: "",
			bacon: "#"
		};
	},
	methods: {
		checkForm: function(e) {
			if (this.name && this.email && this.subject && this.message) {
				// return true;
			}
		},
		sendEmail() {
			this.name = encodeURI(this.name);
			this.email = encodeURI(this.email);
			this.message = encodeURI(this.message);
			this.bacon = encodeURI(this.bacon);
			try {
				Email.send({
					SecureToken: "",
					To: "",
					From: "",
					Subject:
						"You have a message from " +
						this.name +
						" <strong>developerbacon.ca</strong>",
					Body:
						"<p><strong>NAME: </strong> " +
						this.name +
						"</p><p><strong>EMAIL: </strong>" +
						this.email +
						"</p><p><strong>BACON: </strong>" +
						this.bacon +
						"</p><p><strong>MESSAGE: </strong>" +
						this.message +
						"</p>"
				}).then(message => alert("Message has been sent."));
			} catch (e) {
				alert(e.message);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
form {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;

	div {
		grid-column: 1 / span 2;

		input,
		select {
			width: calc(50% - 0.4rem);
			padding: 0.5rem;
		}
		select {
			width: calc(100% - 0.4rem);
		}
	}

	textarea {
		grid-column: 1 / span 2;
	}
}
input,
select,
textarea {
	color: var(--text-color, $text-color);

	&::placeholder {
		color: var(--text-color, $text-color);
	}
}
</style>
