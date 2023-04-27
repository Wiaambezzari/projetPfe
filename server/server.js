const express = require("express");
const app = express();
app.use(express.json());
app.listen(5000, () => {
  console.log("server started on port 5000");
});

app.get("/api", (req, res) => {
  res.json(data);
});

const data = [
  {
    firstname: "nacer",
    lastname: "chouich",
    email: "user1@example.com",
    objet: "objet 1",
    message: "message 1",
  },
  {
    firstname: "wiaam",
    lastname: "bezzari",
    email: "user2@example.com",
    objet: "objet 2",
    message: "message 2",
  },
];

app.post("/api/form", (req, res) => {
  const { firstname, lastname, email, objet, message } = req.body;
  const newForm = {
    firstname,
    lastname,
    email,
    objet,
    message,
  };
  data.push(newForm);
  if (err) throw err;
  res.json(newForm);
});
