"use strict";
exports.__esModule = true;
var settings_module_scss_1 = require("@/styles/settings.module.scss");
var image_1 = require("next/image");
function Delivery() {
    //현재 주소가 /posts로 시작하면 상단에 포스트로 표기
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            React.createElement("form", { className: "", action: "", encType: "multipart/form-data" },
                React.createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uBC30\uB2EC\uC815\uBCF4",
                    ' ',
                    React.createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uBC30\uB2EC \uC9C0\uC5ED \uC124\uC815",
                    React.createElement("div", { className: settings_module_scss_1["default"].button_form },
                        "\uC2E4\uC81C\uB85C \uAD00\uB9AC\uC790\uCABD\uC5D0 \uB118\uC5B4\uAC08 \uB370\uC774\uD130\uAC00 \uBB38\uC790\uB85C \uD45C\uC2DC\uB418\uC5B4\uC57C\uD568",
                        React.createElement("button", { className: settings_module_scss_1["default"].modal_open_button, type: "button" }, "\uC124\uC815\uD558\uAE30")),
                    React.createElement("div", { className: settings_module_scss_1["default"].map }, "map")),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uBC30\uB2EC\uC9C0\uC5ED \uC548\uB0B4\uBB38\uAD6C",
                    React.createElement("input", { type: "text", placeholder: "\uD569\uC815\uB3D9, \uC11C\uAD50\uB3D9, \uB2F9\uC778\uB3D9", className: "" + settings_module_scss_1["default"].long_input_text })),
                React.createElement("hr", { className: settings_module_scss_1["default"].margin_bottom }),
                React.createElement("div", { className: settings_module_scss_1["default"].count_form },
                    "\uC870\uB9AC + \uBC30\uB2EC\uC2DC\uAC04",
                    React.createElement("div", { className: settings_module_scss_1["default"].setting_count },
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_minus.svg", alt: "Window icon", width: 24, height: 24 }),
                        "20\uBD84",
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_plus.svg", alt: "Window icon", width: 24, height: 24 }))),
                React.createElement("div", { className: settings_module_scss_1["default"].count_form },
                    "\uC870\uB9AC\uC2DC\uAC04",
                    React.createElement("div", { className: settings_module_scss_1["default"].setting_count },
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_minus.svg", alt: "Window icon", width: 24, height: 24 }),
                        "20\uBD84",
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_plus.svg", alt: "Window icon", width: 24, height: 24 })))))));
}
exports["default"] = Delivery;
