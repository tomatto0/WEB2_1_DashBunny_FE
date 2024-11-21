'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navCoupon_module_scss_1 = require("./navCoupon.module.scss");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_2 = require("react");
function NavCoupon() {
    var pathname = navigation_1.usePathname();
    var _a = react_2.useState(''), activePath = _a[0], setActivePath = _a[1];
    react_2.useEffect(function () {
        // 현재 경로를 activePath로 설정
        setActivePath(pathname);
    }, [pathname]);
    var isActive = function (path) { return activePath === path; };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: navCoupon_module_scss_1["default"].nav_wrap },
            react_1["default"].createElement("h1", { className: navCoupon_module_scss_1["default"].title }, "\uCFE0\uD3F0 \uAD00\uB9AC"),
            react_1["default"].createElement("ul", { className: navCoupon_module_scss_1["default"].category_list },
                react_1["default"].createElement(link_1["default"], { href: "/coupon" },
                    react_1["default"].createElement("li", { className: navCoupon_module_scss_1["default"].category + " " + (isActive('/coupon') ? navCoupon_module_scss_1["default"].active : '') }, "\uCFE0\uD3F0 \uBAA9\uB85D")),
                react_1["default"].createElement(link_1["default"], { href: "/coupon/add" },
                    react_1["default"].createElement("li", { className: navCoupon_module_scss_1["default"].category + " " + (isActive('/coupon/add') ? navCoupon_module_scss_1["default"].active : '') }, "\uCFE0\uD3F0 \uBC1C\uAE09 \uC2E0\uCCAD"))))));
}
exports["default"] = NavCoupon;
