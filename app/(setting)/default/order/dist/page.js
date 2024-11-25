'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var settings_module_scss_1 = require("@/styles/settings.module.scss");
var react_1 = require("react");
var useOrderInfo_1 = require("../hooks/useOrderInfo");
var useOrderInfo_2 = require("../hooks/useOrderInfo");
function OrderInfo() {
    var _a = useOrderInfo_1.useGetStoreOrderInfo(), data = _a.data, isLoading = _a.isLoading;
    var _b = react_1.useState(false), isChecked = _b[0], setIsChecked = _b[1];
    var initialState = {
        isTakeout: '',
        takeoutDiscount: 0,
        minOrderAmount: 0,
        deliveryTip: 0
    };
    function reducer(state, action) {
        var _a;
        switch (action.type) {
            case 'UPDATE_FIELD':
                return __assign(__assign({}, state), (_a = {}, _a[action.field] = action.value, _a));
            case 'SET_INITIAL_STATE':
                return __assign(__assign({}, state), action.value);
            default:
                return state;
        }
    }
    var _c = react_1.useReducer(reducer, initialState), formData = _c[0], dispatch = _c[1];
    // Update state when `data` is loaded
    react_1.useEffect(function () {
        if (data) {
            dispatch({
                type: 'SET_INITIAL_STATE',
                value: {
                    isTakeout: data.isTakeout || '',
                    takeoutDiscount: data.takeoutDiscount || 0,
                    minOrderAmount: data.minOrderAmount || 0,
                    deliveryTip: data.deliveryTip || 0
                }
            });
            if (data.isTakeout === 'On') {
                setIsChecked(true);
            }
        }
    }, [data]);
    //입력될때마다 formdata가 업뎃되는 함수
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        dispatch({ type: 'UPDATE_FIELD', field: name, value: value });
    };
    //checkbox가 눌러질때마다 checkbox의 상태에 따라서 formdata가 업뎃되는 함수
    var handleCheckBoxChange = function () {
        setIsChecked(!isChecked);
        dispatch({
            type: 'UPDATE_FIELD',
            field: 'isTakeout',
            value: isChecked ? 'On' : 'Off'
        });
    };
    var mutate = useOrderInfo_2["default"]().mutate;
    //폼데이터 제출
    var handleSubmit = function (e) {
        e.preventDefault();
        // console.log(formData);
        mutate(formData);
    };
    if (isLoading)
        return react_1["default"].createElement("div", null, "\uB85C\uB529 \uC911...");
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            react_1["default"].createElement("form", { className: "", action: "", encType: "multipart/form-data", onSubmit: handleSubmit },
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uC8FC\uBB38\uC815\uBCF4",
                    ' ',
                    react_1["default"].createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].short_toggle },
                    "\uD3EC\uC7A5 \uC8FC\uBB38 \uC5EC\uBD80",
                    react_1["default"].createElement("label", { className: "" + settings_module_scss_1["default"].inline_flex, htmlFor: "\uD3EC\uC7A5\uC8FC\uBB38\uC5EC\uBD80" },
                        react_1["default"].createElement("input", { type: "checkbox", className: "" + settings_module_scss_1["default"].peer, checked: isChecked, onChange: handleCheckBoxChange, id: "\uD3EC\uC7A5\uC8FC\uBB38\uC5EC\uBD80" }))),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uD3EC\uC7A5\uD560\uC778",
                    react_1["default"].createElement("p", { className: settings_module_scss_1["default"].short_number_text }, "\uC6D0"),
                    react_1["default"].createElement("input", { type: "number", placeholder: "0", min: "0", max: "10000", step: "100", className: settings_module_scss_1["default"].short_input_text, name: "takeoutDiscount", value: formData.takeoutDiscount, onChange: handleInputChange })),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uCD5C\uC18C \uC8FC\uBB38\uAE08\uC561",
                    react_1["default"].createElement("p", { className: settings_module_scss_1["default"].short_number_text }, "\uC6D0"),
                    react_1["default"].createElement("input", { type: "number", placeholder: "0", min: "0", max: "100000", step: "100", className: settings_module_scss_1["default"].short_input_text, name: "minOrderAmount", value: formData.minOrderAmount, onChange: handleInputChange })),
                react_1["default"].createElement("hr", { className: settings_module_scss_1["default"].margin_bottom }),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAE30\uBCF8 \uBC30\uB2EC\uD301(\uCD5C\uC18C \uC8FC\uBB38 \uAE08\uC561 \uC774\uC0C1)",
                    react_1["default"].createElement("p", { className: settings_module_scss_1["default"].short_number_text }, "\uC6D0"),
                    react_1["default"].createElement("input", { type: "number", placeholder: "0", min: "0", max: "10000", step: "100", className: settings_module_scss_1["default"].short_input_text, name: "deliveryTip", value: formData.deliveryTip, onChange: handleInputChange }))))));
}
exports["default"] = OrderInfo;
