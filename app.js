
// import module
const chalk = require('chalk');
const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');
// const { send } = require('process');

const productRouter = express.Router();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");


productRouter.route("/").get((req, res) => {
    res.render("products",{
    products: [
        {productTiltle: 'Blend 285', productDescribtion: 'signature', price: 265},
        {productTiltle: 'หงส์ทอง', productDescribtion: 'new product', price: 265},
        {productTiltle: 'Chang', productDescribtion: '25 years Celebates', price: 58},
        {productTiltle: 'Leo', productDescribtion: 'No8', price: 60}
    ],
})

});
productRouter.route("/1").get((req, res) => {
    res.send("Hello world !! I'm Product 1")
});
app.use("/products", productRouter);

app.get("/", (req, res) => {
    res.render("index", {
        username: 'Stillx',
        customers: ["Jame", "Forn", "Test"]
    });
})



app.listen(PORT, ()=>{
    debug("Listenning on port" + chalk.green(" : "+PORT));
    console.log("Listenning on port: " + PORT);
    console.log(chalk.green('Server Start!'));
})

