"use strict";
const db = require("../config/db");

class UserStorage {
  // static getUserInfo(id) {
  //   const query = "SELECT * FROM users WHERE id = ?;";
  //   return new Promise((resolve, reject) => {
  //     db.query(query, [id], (err, data) => {
  //       if (err) reject(err);
  //       else resolve(data[0]);
  //     });
  //   });
  // }
  static getUserInfo(id) {
    const query = "SELECT * FROM users WHERE id = ?;";
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }
  static saveUserInfo(userInfo) {
    const query = "INSERT INTO users(id,password,name) VALUES(?,?,?);";
    return new Promise((resolve, reject) => {
      db.query(
        query,
        [userInfo.id, userInfo.password, userInfo.name],
        (err, data) => {
          if (err) reject(err, "회원가입 실패");
          else resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
