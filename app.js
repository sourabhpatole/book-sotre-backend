const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use("/books", router);
mongoose
  .connect(
    "mongodb+srv://admin:.Sourabh1@cluster0.4xxyq.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the Database"))
  .then(() => {
    app.listen(5000, () => console.log("Server is Created"));
  })
  .catch((err) => console.log(err));
