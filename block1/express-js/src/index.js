const { request } = require("express");
const express = require("express");
const listRouter = require(".//router/listRouter");

const port = 8001;
const app = express();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

app.use("/", listRouter);

app.get("/", (req, res) => {
  res.send(arr);
});

app.post("/post", (req, res) => {
  arr.push(11);
  console.log(req.body);
  res.send(arr);
});

app.delete("/deletePost", (req, res) => {
  const index = arr.indexOf(11);
  if (index > -1) {
    // only splice array when item is found
    arr.splice(index, 1); // 2nd parameter means remove one item only
  }
  res.send(arr);
});

app.put("/updatePost", (req, res) => {
  {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === 2) {
        arr[i] = 22;
      }
    }
    res.send(arr);
  }
});

app.listen(port, () => {
  console.log(`Server listening ${port}`);
});

module.exports = listRouter;
