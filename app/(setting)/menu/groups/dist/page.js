'use client';
"use strict";
exports.__esModule = true;
var menu_group_module_scss_1 = require("@/styles/menu_group.module.scss");
var image_1 = require("next/image");
var link_1 = require("next/link");
function Coupon() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: menu_group_module_scss_1["default"].contents_wrap },
            React.createElement("div", { className: menu_group_module_scss_1["default"].page_title },
                "\uBA54\uB274 \uADF8\uB8F9 \uC124\uC815",
                React.createElement(link_1["default"], { href: "/menu/add" },
                    React.createElement("div", { className: menu_group_module_scss_1["default"].add_menu_button },
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/add_white.svg", alt: "add_menu_plus_icon", width: 14, height: 14 }),
                        "\uADF8\uB8F9 \uCD94\uAC00"))),
            React.createElement("div", { className: menu_group_module_scss_1["default"].menu_list },
                "\uCE74\uD14C\uACE0\uB9AC\uBA85",
                React.createElement("hr", { className: menu_group_module_scss_1["default"].margin_top }),
                React.createElement("div", null,
                    React.createElement("div", { className: menu_group_module_scss_1["default"].button_wrap },
                        "\uC0D0\uB7EC\uB4DC",
                        React.createElement("div", null,
                            React.createElement("button", { className: menu_group_module_scss_1["default"].delete_button, type: "button" }, "\uC0AD\uC81C"),
                            React.createElement("button", { className: menu_group_module_scss_1["default"].soldout_button, type: "button" }, "\uD488\uC808"))))))));
}
exports["default"] = Coupon;
