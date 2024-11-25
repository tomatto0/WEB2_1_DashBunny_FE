'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var settings_module_scss_1 = require("@/styles/settings.module.scss");
var react_2 = require("react");
function Counter(_a) {
    var number = _a.number, onStateChange = _a.onStateChange;
    var reducer = function (state, action) {
        switch (action.type) {
            case 'INCREASE':
                return state + 5;
            case 'DECREASE':
                return state - 5;
            case 'RESET':
                return action.value; // Reset state to a new value
        }
        throw new Error('[ERROR] unknown action type');
    };
    var _b = react_2.useReducer(reducer, number), state = _b[0], dispatch = _b[1];
    react_2.useEffect(function () {
        dispatch({ type: 'RESET', value: number });
    }, [number]);
    react_2.useEffect(function () {
        onStateChange(state);
    }, [state, onStateChange]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: settings_module_scss_1["default"].setting_count },
            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_minus.svg", alt: "Window icon", width: 24, height: 24, onClick: function () { return dispatch({ type: 'DECREASE' }); } }),
            state,
            "\uBD84",
            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_plus.svg", alt: "Window icon", width: 24, height: 24, onClick: function () {
                    dispatch({ type: 'INCREASE' });
                } }))));
}
exports["default"] = Counter;
