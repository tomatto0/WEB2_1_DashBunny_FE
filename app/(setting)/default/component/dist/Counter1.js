'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var settings_module_scss_1 = require("@/styles/settings.module.scss");
function Counter() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: settings_module_scss_1["default"].setting_count },
            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_minus.svg", alt: "Window icon", width: 24, height: 24 }),
            "20\uBD84",
            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_plus.svg", alt: "Window icon", width: 24, height: 24 }))));
}
exports["default"] = Counter;
