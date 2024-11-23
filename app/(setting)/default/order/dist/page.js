'use client';
"use strict";
exports.__esModule = true;
var settings_module_scss_1 = require("@/styles/settings.module.scss");
var react_1 = require("react");
function Order() {
    var _a = react_1.useState(false), isChecked = _a[0], setIsChecked = _a[1];
    var handleChange = function () {
        setIsChecked(!isChecked);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            React.createElement("form", { className: "", action: "", encType: "multipart/form-data" },
                React.createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uC8FC\uBB38\uC815\uBCF4",
                    ' ',
                    React.createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                React.createElement("div", { className: settings_module_scss_1["default"].short_toggle },
                    "\uD3EC\uC7A5 \uC8FC\uBB38 \uC5EC\uBD80",
                    React.createElement("label", { className: "" + settings_module_scss_1["default"].inline_flex, htmlFor: "\uD3EC\uC7A5\uC8FC\uBB38\uC5EC\uBD80" },
                        React.createElement("input", { type: "checkbox", className: "" + settings_module_scss_1["default"].peer, checked: isChecked, onChange: handleChange, id: "\uD3EC\uC7A5\uC8FC\uBB38\uC5EC\uBD80" }))),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uD3EC\uC7A5\uD560\uC778",
                    React.createElement("p", { className: settings_module_scss_1["default"].short_number_text }, "\uC6D0"),
                    React.createElement("input", { type: "number", placeholder: "0", min: "0", max: "10000", step: "100", className: settings_module_scss_1["default"].short_input_text })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uCD5C\uC18C \uC8FC\uBB38\uAE08\uC561",
                    React.createElement("p", { className: settings_module_scss_1["default"].short_number_text }, "\uC6D0"),
                    React.createElement("input", { type: "number", placeholder: "0", min: "0", max: "100000", step: "100", className: settings_module_scss_1["default"].short_input_text })),
                React.createElement("hr", { className: settings_module_scss_1["default"].margin_bottom }),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAE30\uBCF8 \uBC30\uB2EC\uD301(\uCD5C\uC18C \uC8FC\uBB38 \uAE08\uC561 \uC774\uC0C1)",
                    React.createElement("p", { className: settings_module_scss_1["default"].short_number_text }, "\uC6D0"),
                    React.createElement("input", { type: "number", placeholder: "0", min: "0", max: "100000", step: "100", className: settings_module_scss_1["default"].short_input_text }))))));
}
exports["default"] = Order;
