const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.urlencoded());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let task = [];

app.post("/to-do", (req, res) => {
  let newTask = req.body.newTask;
  task.push(newTask);
  console.log(task);
  res.render("index.ejs", { task: task });
  //   res.redirect("/");
});

// app.get("/", (req, res) => {
//   console.log("Get" + task);
//   res.render("index.ejs", { task: task[0] });
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));
