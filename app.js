const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.urlencoded());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var task = ["buy socks", "buy detergent"];

app.post("/to-do", (req, res) => {
  let newTask = req.body.newTask;
  task.push(newTask);
  res.redirect("/");
  console.log(task);
});

app.get("/", (req, res) => {
  res.render("index.ejs", { task });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
