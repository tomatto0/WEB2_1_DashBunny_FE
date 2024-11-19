"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navMenu_module_scss_1 = require("./navMenu.module.scss");
var link_1 = require("next/link");
function NavMenu() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: navMenu_module_scss_1["default"].nav_wrap },
            react_1["default"].createElement("h1", { className: navMenu_module_scss_1["default"].title }, "\uBA54\uB274 \uAD00\uB9AC"),
            react_1["default"].createElement("ul", { className: navMenu_module_scss_1["default"].category_list },
                react_1["default"].createElement(link_1["default"], { href: "/menu" },
                    react_1["default"].createElement("li", { className: navMenu_module_scss_1["default"].category }, "\uBA54\uB274")),
                react_1["default"].createElement(link_1["default"], { href: "/menu/add" },
                    react_1["default"].createElement("li", { className: navMenu_module_scss_1["default"].category }, "\uBA54\uB274\uB4F1\uB85D")),
                react_1["default"].createElement(link_1["default"], { href: "/menu/groups" },
                    react_1["default"].createElement("li", { className: navMenu_module_scss_1["default"].category }, "\uBA54\uB274 \uADF8\uB8F9 \uC124\uC815"))))));
}
exports["default"] = NavMenu;
