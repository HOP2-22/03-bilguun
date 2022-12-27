const express = require("express");
const blogRouter = require("./routers/blogRouter");
const postRouter = require("./routers/postRouter");
const commentRouter = require("./routers/commentRouter");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

app.use(express.json());
app.use("/user", blogRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

mongoose.connect(
  "mongodb+srv://Bilguun0829:billi0829@cluster0.ecy1n6f.mongodb.net/blog"
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB amjilttai holbogdloo");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
