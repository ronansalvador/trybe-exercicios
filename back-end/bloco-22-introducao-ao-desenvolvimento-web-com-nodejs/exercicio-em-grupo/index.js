const express = require('express');

const app = express();
const users = [];
app.use(express.json());
app.post("/user/register", function(req, res) {
const {username, email, password} = req.body;
if (username.length < 3 || !username) {
return res.status(400).json({"message": "invalid data"})
}
const regexEmail = /\S+@\S+\.\S+/;
if (!regexEmail.test(email)) { 
return res.status(400).json({"message": "invalid data"})
}
if (typeof password !== "number" || password.toString().length < 4 || password.toString().length > 8) { 
return res.status(400).json({ "message": "invalid data" })
}
users.push({username, email, password})
res.status(201).json({ "message": "user created" })
});
app.listen("3001", () => console.log("Servidor ouvindo na porta 3001")); 