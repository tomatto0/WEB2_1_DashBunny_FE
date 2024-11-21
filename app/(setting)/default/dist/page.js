"use strict";
exports.__esModule = true;
var settings_module_scss_1 = require("@/styles/settings.module.scss");
var image_1 = require("next/image");
function Order() {
    //현재 주소가 /posts로 시작하면 상단에 포스트로 표기
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            React.createElement("form", { className: "", action: "", encType: "multipart/form-data" },
                React.createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uAE30\uBCF8\uC815\uBCF4",
                    ' ',
                    React.createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C\uC774\uB984",
                    React.createElement("input", { type: "text", defaultValue: "\uB300\uC26C\uBC84\uB2C8", disabled: true, className: settings_module_scss_1["default"].short_input_text + " " + settings_module_scss_1["default"].disabled })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC804\uD654\uBC88\uD638",
                    React.createElement("input", { type: "text", placeholder: "000-0000-0000", className: settings_module_scss_1["default"].short_input_text })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC0C1\uD0DC",
                    React.createElement("select", { className: settings_module_scss_1["default"].short_selector },
                        React.createElement("option", null, "\uC6B4\uC601\uC911"),
                        React.createElement("option", null, "\uC6B4\uC601\uC815\uC9C0"))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC8FC\uC18C",
                    React.createElement("input", { type: "text", defaultValue: "\uC11C\uC6B8\uC2DC \uB178\uC6D0\uAD6C \uC5B4\uCA4C\uAD6C", disabled: true, className: settings_module_scss_1["default"].long_input_text + " " + settings_module_scss_1["default"].disabled })),
                React.createElement("hr", { className: settings_module_scss_1["default"].margin_bottom }),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC18C\uAC1C \uD3B8\uC9D1",
                    React.createElement("div", { className: settings_module_scss_1["default"].add_image_wrap },
                        React.createElement("div", { className: settings_module_scss_1["default"].add_image_block },
                            "\uB9E4\uC7A5 \uB85C\uACE0",
                            React.createElement("div", { className: settings_module_scss_1["default"].add_image },
                                React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/setting_camera.svg", alt: "camera icon", width: 29, height: 29 }),
                                "\uC774\uBBF8\uC9C0 \uCD94\uAC00")),
                        React.createElement("div", { className: settings_module_scss_1["default"].add_image_block },
                            "\uBC30\uB108 \uC774\uBBF8\uC9C0",
                            React.createElement("div", { className: settings_module_scss_1["default"].add_image },
                                React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/setting_camera.svg", alt: "camera icon", width: 29, height: 29 }),
                                "\uC774\uBBF8\uC9C0 \uCD94\uAC00")))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC18C\uAC1C",
                    React.createElement("textarea", { wrap: "soft", placeholder: "\uAC00\uAC8C \uC18C\uAC1C\uB97C \uC801\uC5B4\uC8FC\uC138\uC694", rows: 2, className: settings_module_scss_1["default"].text_area })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uD64D\uBCF4\uC6A9 shorts URL\uC8FC\uC18C",
                    React.createElement("input", { type: "text", placeholder: "https://youtube.com/shorts/PgIJlbWb7Nc?feature=shared", className: "" + settings_module_scss_1["default"].long_input_text }))))));
}
exports["default"] = Order;
