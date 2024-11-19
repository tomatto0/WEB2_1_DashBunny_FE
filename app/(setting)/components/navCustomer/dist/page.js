"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navCustomer_module_scss_1 = require("./navCustomer.module.scss");
var link_1 = require("next/link");
function NavCustomer() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: navCustomer_module_scss_1["default"].nav_wrap },
            react_1["default"].createElement("h1", { className: navCustomer_module_scss_1["default"].title }, "\uACE0\uAC1D\uC13C\uD130"),
            react_1["default"].createElement("ul", { className: navCustomer_module_scss_1["default"].category_list },
                react_1["default"].createElement(link_1["default"], { href: "/customer" },
                    react_1["default"].createElement("li", { className: navCustomer_module_scss_1["default"].category }, "\uACF5\uC9C0\uC0AC\uD56D")),
                react_1["default"].createElement(link_1["default"], { href: "/customer/chore" },
                    react_1["default"].createElement("li", { className: navCustomer_module_scss_1["default"].category }, "\uC124\uC815"))))));
}
exports["default"] = NavCustomer;
