const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(101).sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
	res.status(401).sendFile(__dirname + "/about.html");
});
app.get("/contact", (req, res) => {
	res.status(401).sendFile(__dirname + "/contact.html");
});

app.listen(8001, (err) => {
	if (err) throw err;
	console.log("Server Started on http://localhost:8001/");
});
