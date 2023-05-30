"use strict";
const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const password_confirm = document.querySelector("#password_confirm");

const registerBtn = document.querySelector("#register-button");
const GoLoginBtn = document.querySelector("#Log-button");

GoLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log("로그인 페이지로 이동합니다");
  fetch("/login").then((location.href = "/login"));
});

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value !== password_confirm.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    password_confirm: password_confirm.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("회원가입이 완료되었습니다.");
        location.href = "/";
      } else {
        alert(res.err);
      }
    });
});
