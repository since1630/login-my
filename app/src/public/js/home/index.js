"use strict";
// const express = require("express");
// const router = express.Router();
// const ctrl = require("../../../routes/ctrl.js");

// router.get("/", ctrl.index);

const login_button = document.querySelector("#login");
const register_button = document.querySelector("#register");

login_button.addEventListener("click", go_login);
register_button.addEventListener("click", go_register);

function go_login() {
  fetch("/login", {
    method: "GET",
  })
    .then((location.href = "/login"))
    .catch((err) => console.error(err));
}
function go_register() {
  fetch("/register", {
    method: "GET",
  })
    .then((location.href = "/register"))
    .catch((err) => console.error(err));
}
