"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navDefault_module_scss_1 = require("./navDefault.module.scss");
var link_1 = require("next/link");
function NavDefault() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: navDefault_module_scss_1["default"].nav_wrap },
            react_1["default"].createElement("h1", { className: navDefault_module_scss_1["default"].title }, "\uAC00\uAC8C \uAD00\uB9AC"),
            react_1["default"].createElement("ul", { className: navDefault_module_scss_1["default"].category_list },
                react_1["default"].createElement(link_1["default"], { href: "/default" },
                    react_1["default"].createElement("li", { className: navDefault_module_scss_1["default"].category }, "\uAE30\uBCF8\uC815\uBCF4")),
                react_1["default"].createElement(link_1["default"], { href: "/default/businessHours" },
                    react_1["default"].createElement("li", { className: navDefault_module_scss_1["default"].category }, "\uC6B4\uC601\uC815\uBCF4")),
                react_1["default"].createElement(link_1["default"], { href: "/default/order" },
                    react_1["default"].createElement("li", { className: navDefault_module_scss_1["default"].category }, "\uC8FC\uBB38\uC815\uBCF4")),
                react_1["default"].createElement(link_1["default"], { href: "/default/delivery" },
                    react_1["default"].createElement("li", { className: navDefault_module_scss_1["default"].category }, "\uBC30\uB2EC\uC815\uBCF4"))))));
}
exports["default"] = NavDefault;
