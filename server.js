const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");

//config dotenv setup
dotenv.config();

//connection mongodb setup
connectDB();

const app = express();

//middlewares setup
app.use(express.json());
app.use(morgan("dev"));

//route setup
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

//static files
app.use(express.static(path.join(__dirname, "/Pizza_Client/build")));
app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "Pizza_Client", "build", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
      .bgMagenta.white
  );
});