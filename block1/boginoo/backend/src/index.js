const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const listRouter = require("./router/listRouter");
const app = express();
const port = 8029;

app.use(cors());
app.use(express.json());
app.use("/short", listRouter);

mongoose.connect(
  "mongodb+srv://Bilguun0829:billi0829@cluster0.ecy1n6f.mongodb.net/boginoo?retryWrites=true&w=majority"
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB amjilttai holbogdloo");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
