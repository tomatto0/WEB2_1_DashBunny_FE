'use client';
"use strict";
exports.__esModule = true;
var coupon_module_scss_1 = require("@/styles/coupon.module.scss");
var image_1 = require("next/image");
var link_1 = require("next/link");
function Coupon() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: coupon_module_scss_1["default"].contents_wrap },
            React.createElement("div", { className: coupon_module_scss_1["default"].page_title },
                "\uCFE0\uD3F0",
                React.createElement(link_1["default"], { href: "/menu/add" },
                    React.createElement("div", { className: coupon_module_scss_1["default"].add_menu_button },
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/add_white.svg", alt: "add_menu_plus_icon", width: 14, height: 14 }),
                        "\uCFE0\uD3F0 \uBC1C\uD589"))),
            React.createElement("div", { className: coupon_module_scss_1["default"].menu_list },
                React.createElement("div", { className: coupon_module_scss_1["default"].list_bar_wrap },
                    "\uCFE0\uD3F0\uBC88\uD638",
                    React.createElement("div", null, "\uCFE0\uD3F0\uBA85"),
                    React.createElement("div", { className: coupon_module_scss_1["default"].list_bar_right },
                        React.createElement("div", null, "\uD560\uC778\uAE08\uC561"),
                        React.createElement("div", { className: coupon_module_scss_1["default"].soldout_name }, "\uC0AC\uC6A9\uAE30\uD55C"),
                        React.createElement("div", { className: coupon_module_scss_1["default"].soldout_name }, "\uBC1C\uAE09 \uC218"),
                        React.createElement("div", { className: coupon_module_scss_1["default"].soldout_name }, "\uC0C1\uD0DC"))),
                React.createElement("div", { className: coupon_module_scss_1["default"].menu },
                    React.createElement("div", { className: coupon_module_scss_1["default"].menu_left },
                        React.createElement("div", { className: coupon_module_scss_1["default"].menu_title },
                            React.createElement("p", null, "00001238"))),
                    React.createElement("div", null, "\uBE44\uC624\uBA74 \uC6B0\uBE44 \uD560\uC778"),
                    React.createElement("div", { className: coupon_module_scss_1["default"].menu_right },
                        React.createElement("div", { className: coupon_module_scss_1["default"].min_width }, "2000\uC6D0"),
                        React.createElement("div", { className: coupon_module_scss_1["default"].expire }, "\uBC1C\uAE09 \uD6C4 7\uC77C \uC774\uB0B4"),
                        React.createElement("div", { className: coupon_module_scss_1["default"].min_width }, "0"),
                        React.createElement("div", { className: coupon_module_scss_1["default"].badge + " " + coupon_module_scss_1["default"].orange + " " + coupon_module_scss_1["default"].min_width }, "\uC9C4\uD589\uC911")))))));
}
exports["default"] = Coupon;
