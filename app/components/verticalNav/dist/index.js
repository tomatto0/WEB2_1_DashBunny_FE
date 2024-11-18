"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var verticalNav_module_scss_1 = require("./verticalNav.module.scss");
var link_1 = require("next/link");
function VerticalNav(props) {
    var clickModal = props.clickModal;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].v_nav },
            react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].v_nav_top },
                react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/v_nav_close.svg", alt: "Window icon", width: 41, height: 41, onClick: clickModal }),
                react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].button_wrap },
                    react_1["default"].createElement(link_1["default"], { href: "/report" },
                        react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].button },
                            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/v_nav_report.svg", alt: "Window icon", width: 34, height: 34 }),
                            react_1["default"].createElement("p", null, "\uB9E4\uCD9C\uC870\uD68C"))),
                    react_1["default"].createElement(link_1["default"], { href: "/setting/default" },
                        react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].button },
                            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/v_nav_default.svg", alt: "Window icon", width: 34, height: 34 }),
                            react_1["default"].createElement("p", null, "\uAC00\uAC8C\uAD00\uB9AC"))),
                    react_1["default"].createElement(link_1["default"], { href: "/setting/menu" },
                        react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].button },
                            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/v_nav_menu.svg", alt: "Window icon", width: 34, height: 34 }),
                            react_1["default"].createElement("p", null, "\uBA54\uB274\uAD00\uB9AC"))),
                    react_1["default"].createElement(link_1["default"], { href: "/setting/coupon" },
                        react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].button },
                            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/v_nav_coupon.svg", alt: "Window icon", width: 34, height: 34 }),
                            react_1["default"].createElement("p", null, "\uCFE0\uD3F0\uAD00\uB9AC"))),
                    react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].divider }),
                    react_1["default"].createElement(link_1["default"], { href: "/setting/customer" },
                        react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].button },
                            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/v_nav_customer.svg", alt: "Window icon", width: 34, height: 34 }),
                            react_1["default"].createElement("p", null, "\uACF5\uC9C0\uC0AC\uD56D"))),
                    react_1["default"].createElement(link_1["default"], { href: "/setting/customer/chore" },
                        react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].button },
                            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/v_nav_chore.svg", alt: "Window icon", width: 34, height: 34 }),
                            react_1["default"].createElement("p", null, "\uC124\uC815"))))),
            react_1["default"].createElement(link_1["default"], { href: "/sales-report" },
                react_1["default"].createElement("div", { className: verticalNav_module_scss_1["default"].bottom_button },
                    react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/v_nav_pause.svg", alt: "Window icon", width: 34, height: 36 }),
                    react_1["default"].createElement("p", null, "\uC601\uC5C5\uC911\uC9C0"))))));
}
exports["default"] = VerticalNav;
