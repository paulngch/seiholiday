const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3000;

require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
// app.use(cookieParser());
// app.set("trust proxy", 1);
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true },
//   })
// );

const holidaysController = require("./controllers/holidays.js");
app.use("/holidays", holidaysController);

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.listen(PORT, () => {
  console.log("celebrations happening on port", PORT);
});
