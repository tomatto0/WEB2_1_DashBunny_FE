"use strict";
exports.__esModule = true;
var settings_module_scss_1 = require("@/styles/settings.module.scss");
function businessHours() {
    //현재 주소가 /posts로 시작하면 상단에 포스트로 표기
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            React.createElement("form", { className: "", action: "", encType: "multipart/form-data" },
                React.createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uC6B4\uC601\uC815\uBCF4",
                    ' ',
                    React.createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle + " " + settings_module_scss_1["default"].margin_bottom },
                    "\uC601\uC5C5\uC2DC\uAC04",
                    React.createElement("div", { className: settings_module_scss_1["default"].button_form },
                        "\uB4F1\uB85D\uB41C \uC601\uC5C5\uC2DC\uAC04\uC774 \uC5C6\uC5B4\uC694",
                        React.createElement("button", { className: settings_module_scss_1["default"].modal_open_button, type: "button" }, "\uC124\uC815\uD558\uAE30"))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle + " " + settings_module_scss_1["default"].margin_bottom },
                    "\uD734\uAC8C\uC2DC\uAC04",
                    React.createElement("div", { className: settings_module_scss_1["default"].button_form },
                        "\uB4F1\uB85D\uB41C \uD734\uAC8C\uC2DC\uAC04\uC774 \uC5C6\uC5B4\uC694",
                        React.createElement("button", { className: settings_module_scss_1["default"].modal_open_button, type: "button" }, "\uC124\uC815\uD558\uAE30"))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle + " " + settings_module_scss_1["default"].margin_bottom },
                    "\uD734\uBB34\uC77C",
                    React.createElement("div", { className: settings_module_scss_1["default"].button_form },
                        "\uB4F1\uB85D\uB41C \uD734\uBB34\uC77C\uC774 \uC5C6\uC5B4\uC694",
                        React.createElement("button", { className: settings_module_scss_1["default"].modal_open_button, type: "button" }, "\uC124\uC815\uD558\uAE30"))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uD734\uBB34\uC77C \uC548\uB0B4",
                    React.createElement("textarea", { wrap: "soft", placeholder: "\uD734\uBB34\uC77C\uACFC \uC784\uC2DC\uB85C \uD734\uBB34\uC2DC \uC0AC\uC720\uB97C \uC54C\uB9AC\uACE0 \uC2F6\uC744\uB54C \uD65C\uC6A9\uD574\uBCF4\uC138\uC694", rows: 2, className: settings_module_scss_1["default"].text_area })),
                React.createElement("hr", { className: settings_module_scss_1["default"].margin_bottom }),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle + " " + settings_module_scss_1["default"].margin_bottom },
                    "\uC601\uC5C5 \uC784\uC2DC\uC911\uC9C0",
                    React.createElement("div", { className: settings_module_scss_1["default"].button_form },
                        "\uC624\uD6C4 01:00 ~ \uC624\uD6C4 04:30",
                        React.createElement("button", { className: settings_module_scss_1["default"].modal_open_button, type: "button" }, "\uC124\uC815\uD558\uAE30"))),
                React.createElement("div", { className: settings_module_scss_1["default"].reopen },
                    "\uC601\uC5C5 \uC784\uC2DC\uC911\uC9C0 \uD574\uC81C",
                    React.createElement("button", { className: settings_module_scss_1["default"].reopen_button, type: "button" }, "\uD574\uC81C\uD558\uAE30"))))));
}
exports["default"] = businessHours;
