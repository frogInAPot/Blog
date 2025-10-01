import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var Title = "";
var Fill = "";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

app.get("/posts", (req, res) => {
    res.render("posts.ejs");
  });

app.get("/submit", (req, res) => {
    res.render("submit.ejs");
  });

app.get("/postMaking", (req, res) => {
    res.render("postMaking.ejs");
  });
  

app.post("/posts", (req, res) => {
  console.log(req.body);
  Title = req.body["Title"];
  Fill = req.body["Fill"];
  console.log(Title);
  console.log(Fill);
  res.render("posts.ejs", {theTitle: Title, TheFilling: Fill});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  