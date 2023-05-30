"use strict";

const app = require("../app");
// const PORT = 3000;

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("홈피에 오신걸 환영합니다.");
});
