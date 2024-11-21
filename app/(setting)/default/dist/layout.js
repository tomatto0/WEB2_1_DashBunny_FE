'use client';
"use strict";
exports.__esModule = true;
var page_1 = require("../components/navDefault/page");
var layout_module_scss_1 = require("./layout.module.scss");
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: layout_module_scss_1["default"].flex },
        React.createElement(page_1["default"], null),
        children));
}
exports["default"] = RootLayout;
