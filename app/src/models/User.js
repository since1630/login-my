"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    // 새로 갖고온 body 안의 id와 password가 기존의 id,password와 일치하는지 확인해야함.
    // login()은 응답을 반환하는 용도로 사용.

    const client = this.body; // 새로 갖고온 정보
    try {
      const user_info = await UserStorage.getUserInfo(client.id);
      // if (!user_info) {
      //   return { success: false, msg: "아이디를 입력하세요" };
      // }
      if (user_info.id) {
        if (
          user_info.id === client.id &&
          user_info.password === client.password
        ) {
          return { success: true };
        } else {
          return { success: false, msg: "비밀번호가 다릅니다" };
        }
      } else {
        return { success: false, msg: "아이디가 존재하지 않습니다." };
      }
    } catch (err) {
      console.error(err);
    }
    // 기존 정보 불러오기
  }
  async save() {
    const client = this.body;
    try {
      const reponse = await UserStorage.saveUserInfo(client);
      return reponse;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;
