"use strict";
const User = require("../models/User");

const view = {
  index: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response); // 라우터에 응답을 반환해야 한다. 그리고 라우터는 이 값을 이벤트 리스너에 전달해야 한다.
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.save(req);
    return res.json(response); // 라우터에 응답을 반환해야 한다. 그리고 라우터는 이 값을 이벤트 리스너에 전달해야 한다.
  },
};

module.exports = {
  view,
  process,
};
