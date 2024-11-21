'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navDefault_module_scss_1 = require("./navDefault.module.scss");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_2 = require("react");
function NavDefault() {
    var pathname = navigation_1.usePathname();
    var _a = react_2.useState(''), activePath = _a[0], setActivePath = _a[1];
    react_2.useEffect(function () {
        // 현재 경로를 activePath로 설정
        setActivePath(pathname);
    }, [pathname]);
    var isActive = function (path) { return activePath === path; };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: navDefault_module_scss_1["default"].nav_wrap },
            react_1["default"].createElement("h1", { className: navDefault_module_scss_1["default"].title }, "\uAC00\uAC8C \uAD00\uB9AC"),
            react_1["default"].createElement("ul", { className: navDefault_module_scss_1["default"].category_list },
                react_1["default"].createElement(link_1["default"], { href: "/default" },
                    react_1["default"].createElement("li", { className: navDefault_module_scss_1["default"].category + " " + (isActive('/default') ? navDefault_module_scss_1["default"].active : '') }, "\uAE30\uBCF8\uC815\uBCF4")),
                react_1["default"].createElement(link_1["default"], { href: "/default/businessHours" },
                    react_1["default"].createElement("li", { className: navDefault_module_scss_1["default"].category + " " + (isActive('/default/businessHours') ? navDefault_module_scss_1["default"].active : '') }, "\uC6B4\uC601\uC815\uBCF4")),
                react_1["default"].createElement(link_1["default"], { href: "/default/order" },
                    react_1["default"].createElement("li", { className: navDefault_module_scss_1["default"].category + " " + (isActive('/default/order') ? navDefault_module_scss_1["default"].active : '') }, "\uC8FC\uBB38\uC815\uBCF4")),
                react_1["default"].createElement(link_1["default"], { href: "/default/delivery" },
                    react_1["default"].createElement("li", { className: navDefault_module_scss_1["default"].category + " " + (isActive('/default/delivery') ? navDefault_module_scss_1["default"].active : '') }, "\uBC30\uB2EC\uC815\uBCF4"))))));
}
exports["default"] = NavDefault;
