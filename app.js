
const chalk = require("chalk");
const express = require("express");
const debug = require("debug");
const morgan = require("morgan");
const path = require("path");
const productsRouter = require("./src/router/productsRouter");

const PORT = process.env.PORT || 4000;
const app = express();


app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "Stillx",
    customers: ["Jame", "Forn", "Test"],
  });
});

app.listen(PORT, () => {
  debug("Listenning on port" + chalk.green(" : " + PORT));
  console.log("Listenning on port: " + PORT);
  console.log(chalk.green("Server Start!"));
});
