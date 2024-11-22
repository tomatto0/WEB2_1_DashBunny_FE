"use strict";
exports.__esModule = true;
exports.api = void 0;
var axios_1 = require("axios");
//axios 인스턴스 생성
exports.api = axios_1["default"].create({
    baseURL: process.env.SERVER_URL || "http://localhost:3000/api",
    timeout: 2000,
    headers: {
        "Content-Type": "application/json"
    }
});
