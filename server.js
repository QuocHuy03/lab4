const express = require("express");
var bodyParser = require("body-parser");
const multer = require("multer");
const adminRoutes = require("./routes/admin");
const shopRoutes = require('./routes/shop');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// khai bao sử dụng template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.listen(port, () => {
  console.log(`Đã Chạy Trên Cổng : ${port}`);
});
