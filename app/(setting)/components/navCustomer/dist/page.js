'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navCustomer_module_scss_1 = require("./navCustomer.module.scss");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_2 = require("react");
function NavCustomer() {
    var pathname = navigation_1.usePathname();
    var _a = react_2.useState(''), activePath = _a[0], setActivePath = _a[1];
    react_2.useEffect(function () {
        // 현재 경로를 activePath로 설정
        setActivePath(pathname);
    }, [pathname]);
    var isActive = function (path) { return activePath === path; };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: navCustomer_module_scss_1["default"].nav_wrap },
            react_1["default"].createElement("h1", { className: navCustomer_module_scss_1["default"].title }, "\uACE0\uAC1D\uC13C\uD130"),
            react_1["default"].createElement("ul", { className: navCustomer_module_scss_1["default"].category_list },
                react_1["default"].createElement(link_1["default"], { href: "/customer" },
                    react_1["default"].createElement("li", { className: navCustomer_module_scss_1["default"].category + " " + (isActive('/customer') ? navCustomer_module_scss_1["default"].active : '') }, "\uACF5\uC9C0\uC0AC\uD56D")),
                react_1["default"].createElement(link_1["default"], { href: "/customer/chore" },
                    react_1["default"].createElement("li", { className: navCustomer_module_scss_1["default"].category + " " + (isActive('/customer/chore') ? navCustomer_module_scss_1["default"].active : '') }, "\uC124\uC815"))))));
}
exports["default"] = NavCustomer;
