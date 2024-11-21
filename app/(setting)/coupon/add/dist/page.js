"use strict";
exports.__esModule = true;
var settings_module_scss_1 = require("@/styles/settings.module.scss");
function couponAdd() {
    //현재 주소가 /posts로 시작하면 상단에 포스트로 표기
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            React.createElement("form", { className: "", action: "", encType: "multipart/form-data" },
                React.createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uCFE0\uD3F0 \uBC1C\uAE09 \uC2E0\uCCAD",
                    ' ',
                    React.createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uCFE0\uD3F0 \uC774\uB984",
                    React.createElement("input", { type: "text", placeholder: "\uB9DB\uC788\uB294 \uD0C0\uC774\uD2F0", className: "" + settings_module_scss_1["default"].long_input_text })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uD560\uC778 \uAE08\uC561",
                    React.createElement("input", { type: "text", placeholder: "2,000", className: "" + settings_module_scss_1["default"].long_input_text })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uCD5C\uC18C \uC8FC\uBB38 \uAE08\uC561",
                    React.createElement("p", { className: settings_module_scss_1["default"].long_number_text }, "\uC6D0 \uC774\uC0C1"),
                    React.createElement("input", { type: "text", placeholder: "9,500", className: "" + settings_module_scss_1["default"].long_input_text })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uD560\uC778 \uC801\uC6A9 \uBC94\uC704",
                    React.createElement("select", { className: settings_module_scss_1["default"].long_selector },
                        React.createElement("option", null, "\uC6B4\uC601\uC911"),
                        React.createElement("option", null, "\uC6B4\uC601\uC815\uC9C0"))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uCFE0\uD3F0 \uC720\uD6A8 \uAE30\uAC04",
                    React.createElement("select", { className: settings_module_scss_1["default"].long_selector },
                        React.createElement("option", null, "7\uC77C"),
                        React.createElement("option", null, "14\uC77C"),
                        React.createElement("option", null, "21\uC77C"),
                        React.createElement("option", null, "\uB2F9\uC77C")))))));
}
exports["default"] = couponAdd;
