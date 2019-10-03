# Contact page

## Setting up the email form

To first get the contact form working and able to send emails to you (or where ever you would like to receive emails) go to [smtpjs.com](https://smtpjs.com/#useit) and set up the encrypted SMTP credentials.

You will want to get the security token so your email login is not shown to the world. Once you have the token add it to the `SecureToken` variable like shown below. After that, give it a try.

```javascript
Email.send({
	SecureToken: /*_SECURE_TOKEN_*/,
	To: "",
	From: "",
	Subject: "",
	Body:	"",
});
```
