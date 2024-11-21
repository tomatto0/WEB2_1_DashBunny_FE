'use client';
"use strict";
exports.__esModule = true;
var menu_module_scss_1 = require("@/styles/menu.module.scss");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
function menuSetting() {
    var _a = react_1.useState(false), isChecked = _a[0], setIsChecked = _a[1];
    var _b = react_1.useState(false), isStoreChecked = _b[0], setIsStoreChecked = _b[1];
    var handleChange = function () {
        setIsChecked(!isChecked);
    };
    var storehandleChange = function () {
        setIsStoreChecked(!isStoreChecked);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: menu_module_scss_1["default"].contents_wrap },
            React.createElement("div", { className: menu_module_scss_1["default"].page_title },
                "\uBA54\uB274",
                React.createElement(link_1["default"], { href: "/menu/add" },
                    React.createElement("div", { className: menu_module_scss_1["default"].add_menu_button },
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/add_white.svg", alt: "add_menu_plus_icon", width: 14, height: 14 }),
                        "\uBA54\uB274 \uCD94\uAC00"))),
            React.createElement("div", { className: menu_module_scss_1["default"].groups },
                React.createElement("div", { className: menu_module_scss_1["default"].group }, "\uC804\uCCB4"),
                React.createElement("div", { className: menu_module_scss_1["default"].group }, "1\uC778\uD329"),
                React.createElement("div", { className: menu_module_scss_1["default"].group }, "\uCE58\uD0A8"),
                React.createElement("div", { className: menu_module_scss_1["default"].group }, "\uC0D0\uB7EC\uB4DC")),
            React.createElement("div", { className: menu_module_scss_1["default"].menu_list },
                React.createElement("div", { className: menu_module_scss_1["default"].button_wrap },
                    React.createElement("button", { className: menu_module_scss_1["default"].delete_button, type: "button" }, "\uC0AD\uC81C"),
                    React.createElement("button", { className: menu_module_scss_1["default"].soldout_button, type: "button" }, "\uD488\uC808")),
                React.createElement("div", { className: menu_module_scss_1["default"].list_bar_wrap },
                    "\uC0C1\uD488",
                    React.createElement("div", { className: menu_module_scss_1["default"].list_bar_right },
                        React.createElement("div", null, "\uC7AC\uACE0\uC218\uB7C9"),
                        React.createElement("div", { className: menu_module_scss_1["default"].soldout_name },
                            "\uD488\uC808\uD45C\uC2DC",
                            React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/menu_filter.svg", alt: "add_menu_plus_icon", width: 15, height: 15 })),
                        React.createElement("label", { className: "" + menu_module_scss_1["default"].inline_flex, htmlFor: "\uD488\uC808\uD45C\uC2DC" },
                            React.createElement("input", { type: "checkbox", className: "" + menu_module_scss_1["default"].checkbox, checked: isStoreChecked, onChange: storehandleChange, id: "\uD488\uC808\uD45C\uC2DC" })))),
                React.createElement("div", { className: menu_module_scss_1["default"].menu },
                    React.createElement("div", { className: menu_module_scss_1["default"].menu_left },
                        React.createElement("div", { className: menu_module_scss_1["default"].add_image },
                            React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/menu_img_plus.svg", alt: "camera icon", width: 30, height: 30 }),
                            "\uC774\uBBF8\uC9C0"),
                        React.createElement("div", { className: menu_module_scss_1["default"].menu_title },
                            React.createElement("p", null, "sample \uB0A8\uC131"),
                            React.createElement("p", null, "50000"))),
                    React.createElement("div", { className: menu_module_scss_1["default"].menu_right },
                        React.createElement("div", { className: menu_module_scss_1["default"].left_count }, " 25"),
                        React.createElement("label", { className: "" + menu_module_scss_1["default"].inline_flex, htmlFor: "\uD488\uC808\uC5EC\uBD80" },
                            React.createElement("input", { type: "checkbox", className: "" + menu_module_scss_1["default"].peer, checked: isChecked, onChange: handleChange, id: "\uD488\uC808\uC5EC\uBD80" })),
                        React.createElement("label", { className: "" + menu_module_scss_1["default"].inline_flex, htmlFor: "\uBC30\uC5F4\uCD94\uAC00\uC6A9" },
                            React.createElement("input", { type: "checkbox", className: "" + menu_module_scss_1["default"].checkbox, checked: isStoreChecked, onChange: storehandleChange, id: "\uBC30\uC5F4\uCD94\uAC00\uC6A9" }))))))));
}
exports["default"] = menuSetting;
