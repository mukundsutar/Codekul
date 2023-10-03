const express = require("express");
const router = express();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/register", (req, res) => {
	// console.log("Login");
	const username = req.body.uname;
	const email = req.body.uemail;
	const passw = req.body.upass;

	res.send(username + " " + email + " " + passw);

	// res.redirect('http://localhost:3000/logg/')
});

router.post("/login", (req, res) => {
	const userID = "mukund";
	const password = "123";

	const getUserID = req.body.uname;
	const getPassword = req.body.upass;

	if (getUserID == userID && getPassword == password) {
		res.redirect('http://localhost:3000/home/')
        console.log("Password Accepted.");
	} else {
		res.send("Access Denied...");
	}
});

router.listen(8100, () => {
	console.log("http://localhost:8100/");
});
