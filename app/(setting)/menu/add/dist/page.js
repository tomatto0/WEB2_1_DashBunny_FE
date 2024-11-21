'use client';
"use strict";
exports.__esModule = true;
var settings_module_scss_1 = require("@/styles/settings.module.scss");
var react_1 = require("react");
function addMenu() {
    var _a = react_1.useState(false), isChecked = _a[0], setIsChecked = _a[1];
    var _b = react_1.useState(false), isStoreChecked = _b[0], setIsStoreChecked = _b[1];
    var handleChange = function () {
        setIsChecked(!isChecked);
    };
    var storehandleChange = function () {
        setIsStoreChecked(!isStoreChecked);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            React.createElement("form", { className: "", action: "", encType: "multipart/form-data" },
                React.createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uBA54\uB274 \uB4F1\uB85D",
                    ' ',
                    React.createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uBA54\uB274 \uC774\uB984",
                    React.createElement("input", { type: "text", placeholder: "\uB9DB\uC788\uB294 \uD0C0\uC774\uD2F0", className: "" + settings_module_scss_1["default"].long_input_text })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uBA54\uB274 \uADF8\uB8F9 \uC120\uD0DD",
                    React.createElement("select", { className: settings_module_scss_1["default"].long_selector },
                        React.createElement("option", null, "\uC0D0\uB7EC\uB4DC"),
                        React.createElement("option", null, "\uB4F1\uB4F1 map\uC73C\uB85C \uC0DD\uC131"))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uACA9",
                    React.createElement("p", { className: settings_module_scss_1["default"].long_number_text }, "\uC6D0"),
                    React.createElement("input", { type: "text", placeholder: "9,500", className: "" + settings_module_scss_1["default"].long_input_text })),
                React.createElement("hr", { className: settings_module_scss_1["default"].margin_bottom }),
                React.createElement("div", { className: settings_module_scss_1["default"].long_toggle },
                    "\uD3EC\uC7A5 \uC8FC\uBB38 \uC5EC\uBD80",
                    React.createElement("label", { className: "" + settings_module_scss_1["default"].inline_flex, htmlFor: "\uD3EC\uC7A5\uC8FC\uBB38\uC5EC\uBD80" },
                        React.createElement("input", { type: "checkbox", className: settings_module_scss_1["default"].peer + " " + settings_module_scss_1["default"].sr_only, checked: isChecked, onChange: handleChange, id: "\uD3EC\uC7A5\uC8FC\uBB38\uC5EC\uBD80" }))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uC7AC\uACE0 \uAD00\uB9AC",
                    React.createElement("p", { className: settings_module_scss_1["default"].long_number_text }, "\uAC1C"),
                    React.createElement("input", { type: "text", placeholder: "0", className: "" + settings_module_scss_1["default"].long_input_text })),
                React.createElement("div", { className: settings_module_scss_1["default"].long_toggle },
                    "\uD488\uC808\uD45C\uC2DC",
                    React.createElement("label", { className: "" + settings_module_scss_1["default"].inline_flex, htmlFor: "\uD488\uC808\uD45C\uC2DC" },
                        React.createElement("input", { type: "checkbox", className: settings_module_scss_1["default"].peer + " " + settings_module_scss_1["default"].sr_only, checked: isStoreChecked, onChange: storehandleChange, id: "\uD488\uC808\uD45C\uC2DC" })))))));
}
exports["default"] = addMenu;
