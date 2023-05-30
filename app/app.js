"use strict";
// 모듈 불러오기
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
dotenv.config();
const home = require("./src/routes");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./src/public"));
// app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);
module.exports = app;

// "use strict";
// //* 이 파일이 서버의 중심 파일 (express로 구현한 서버) */

// // 모듈
// const express = require("express");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// // const morgan = require("morgan");
// // const logger = require("./src/config/logger"); // morgan의 데이터를 winston 데이터에 결합하기 위해 모듈 임포트
// const app = express();
// dotenv.config();
// // 라우팅 컨트롤러 가져오기
// const home = require("./src/routes");

// // mongan 스트림 변수 만들기.
// // const accessLogStream = require("./src/config/log");

// // 앱 세팅
// app.set("views", "./src/views"); // views 란 폴더를 만들고 그 폴더를 views 환경(렌더링 폴더)으로 셋팅한다.
// app.set("view engine", "ejs"); // ejs 엔진으로 views 폴더 내부에 있는 html 파일을 렌더링 한다.
// app.use(express.static(`${__dirname}/src/public`)); // login html 파일을 Node.js 가 읽을 수 있게 미들웨어를 사용해 정적 경로로 진입한다. 그러면 Node.js는 public 주소까지 진입하게 되고 여기서 login.ejs의 <script src = '/js/home/login.js'>가 실행된다.
// app.use(bodyParser.json());

// // 로그 기록을 스트림으로 저장하기.
// // app.use(morgan("tiny", { stream: logger.stream }));

// // URL을 통해 전달되는 데이터의 한글 혹은 공백 문자가 제대로 인식되지 않는 문제를 해결해준다.
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/", home); // 미들 웨어 구현 메서드.

// module.exports = app;
