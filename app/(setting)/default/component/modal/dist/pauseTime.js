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
var react_1 = require("react");
var modal_module_scss_1 = require("@/styles/modal.module.scss");
var image_1 = require("next/image");
var react_2 = require("react");
var useOperationInfo_1 = require("../../hooks/useOperationInfo");
function PauseModal(props) {
    var clickModal = props.clickModal;
    var initialState = {
        pauseStartTime: '',
        pauseEndTime: ''
    };
    function reducer(state, action) {
        var _a;
        switch (action.type) {
            case 'UPDATE_FIELD':
                return __assign(__assign({}, state), (_a = {}, _a[action.field] = action.value, _a));
            default:
                return state;
        }
    }
    var _a = react_2.useReducer(reducer, initialState), formData = _a[0], dispatch = _a[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        dispatch({ type: 'UPDATE_FIELD', field: name, value: value });
    };
    var updatePauseTimeMutate = useOperationInfo_1.useUpdatePauseTime().updatePauseTimeMutate;
    //폼데이터 제출
    var handleSubmit = function () {
        updatePauseTimeMutate(formData);
        clickModal();
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: modal_module_scss_1["default"].modal_wrap },
            react_1["default"].createElement("div", { className: modal_module_scss_1["default"].modal_box },
                react_1["default"].createElement("div", { className: modal_module_scss_1["default"].modal_close },
                    react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/modal_close.svg", alt: "storeLogo", width: 36, height: 36, onClick: clickModal })),
                react_1["default"].createElement("div", { className: modal_module_scss_1["default"].modal_title }, "\uC784\uC2DC \uD734\uBB34\uC2DC\uAC04 \uC124\uC815"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: modal_module_scss_1["default"].time_wrap },
                        "\uC2DC\uC791",
                        react_1["default"].createElement("input", { type: "time", id: "start-time", className: "bg-gray-50 border leading-none border-gray-100 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", step: 1800, required: true, name: "pauseStartTime", value: formData.pauseStartTime, onChange: handleChange })),
                    react_1["default"].createElement("div", { className: modal_module_scss_1["default"].time_wrap },
                        "\uC885\uB8CC",
                        react_1["default"].createElement("input", { type: "time", id: "end-time", className: "bg-gray-50 border leading-none border-gray-100 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", step: 1800, required: true, name: "pauseEndTime", value: formData.pauseEndTime, onChange: handleChange }))),
                react_1["default"].createElement("div", { className: modal_module_scss_1["default"].bottom_buttons },
                    react_1["default"].createElement("button", { className: modal_module_scss_1["default"].cancel_button, onClick: clickModal }, "\uCDE8\uC18C"),
                    react_1["default"].createElement("button", { className: modal_module_scss_1["default"].submit_button, onClick: handleSubmit }, "\uC124\uC815"))))));
}
exports["default"] = PauseModal;
