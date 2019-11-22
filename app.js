const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.urlencoded());

app.set('view engine', 'ejs');


app.get("/", (req, res) => res.render("index.ejs"));

app.post("/to-do", (req, res) => {
  let newTask = req.body.newTask;
  console.log(newTask);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
