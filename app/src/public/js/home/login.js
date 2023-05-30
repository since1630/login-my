"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#log-button");
const registerBtn = document.querySelector("#register-button");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("회원가입 페이지로 돌아갔습니다.");
  fetch("/register").then((location.href = "/register"));
});

loginBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (!id.password) return alert("비밀번호를 입력해주세요.");
  const req = {
    id: id.value,
    password: password.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("로그인에 성공하였습니다.");
        location.href = "/";
      } else {
        alert(res.msg);
      }
    });
}

// 아래는 css //
