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
var useOperationInfo_1 = require("../hooks/useOperationInfo");
var pauseTime_1 = require("../component/modal/pauseTime");
function businessHours() {
    var _a = useOperationInfo_1.useGetOperationInfo(), data = _a.data, isLoading = _a.isLoading;
    var _b = react_1.useState('현재 영업중지 상태가 아닙니다'), pauseTime = _b[0], setPauseTime = _b[1];
    //시간설정 NAV 함수
    var _c = react_1.useState(false), showPauseModal = _c[0], setPauseModal = _c[1];
    var clickModal = function () { return setPauseModal(!showPauseModal); };
    var initialState = {
        openingHours: '',
        breakTime: '',
        holidayDays: '',
        holidayNotice: ''
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
    var _d = react_1.useReducer(reducer, initialState), formData = _d[0], dispatch = _d[1];
    var makePauseTime = function () {
        var pauseSentence = "\uD604\uC7AC \uC124\uC815\uB41C \uC784\uC2DC\uC911\uC9C0 \uAE30\uAC04: " + (data === null || data === void 0 ? void 0 : data.pauseStartTime) + " ~ " + (data === null || data === void 0 ? void 0 : data.pauseEndTime);
        return pauseSentence;
    };
    react_1.useEffect(function () {
        if (data) {
            if (data.pauseStartTime !== '') {
                setPauseTime(makePauseTime);
            }
            dispatch({
                type: 'SET_INITIAL_STATE',
                value: {
                    openingHours: data.openingHours || '',
                    breakTime: data.breakTime || '',
                    holidayDays: data.holidayDays || '',
                    holidayNotice: data.holidayNotice || ''
                }
            });
        }
    }, [data]);
    //입력될때마다 formdata가 업뎃되는 함수
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        dispatch({ type: 'UPDATE_FIELD', field: name, value: value });
    };
    var updateOperationInfoMutate = useOperationInfo_1.useUpdateOperationInfo().updateOperationInfoMutate;
    var endPauseTimeMutate = useOperationInfo_1.useEndPauseTime().endPauseTimeMutate;
    //폼데이터 제출
    var handleSubmit = function (e) {
        e.preventDefault();
        updateOperationInfoMutate(formData);
    };
    var handleEndUpdate = function () {
        endPauseTimeMutate();
    };
    if (isLoading)
        return React.createElement("div", null, "\uB85C\uB529 \uC911...");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            React.createElement("form", { className: "", action: "", encType: "multipart/form-data", onSubmit: handleSubmit },
                React.createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uC6B4\uC601\uC815\uBCF4",
                    React.createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uC601\uC5C5\uC2DC\uAC04",
                    React.createElement("input", { type: "text", name: "openingHours", defaultValue: formData.openingHours, className: "" + settings_module_scss_1["default"].long_input_text, onChange: handleInputChange })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uD734\uAC8C\uC2DC\uAC04",
                    React.createElement("input", { type: "text", name: "breakTime", defaultValue: formData.breakTime, className: "" + settings_module_scss_1["default"].long_input_text, onChange: handleInputChange })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uD734\uBB34\uC77C",
                    React.createElement("input", { type: "text", name: "holidayDays", defaultValue: formData.holidayDays, className: "" + settings_module_scss_1["default"].long_input_text, onChange: handleInputChange })),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uD734\uBB34\uC77C \uC548\uB0B4",
                    React.createElement("textarea", { wrap: "soft", placeholder: "\uD734\uBB34\uC77C\uACFC \uC784\uC2DC\uB85C \uD734\uBB34\uC2DC \uC0AC\uC720\uB97C \uC54C\uB9AC\uACE0 \uC2F6\uC744\uB54C \uD65C\uC6A9\uD574\uBCF4\uC138\uC694", rows: 2, name: "holidayNotice", defaultValue: formData.holidayNotice, className: settings_module_scss_1["default"].text_area, onChange: handleInputChange })),
                React.createElement("hr", { className: settings_module_scss_1["default"].margin_bottom }),
                React.createElement("div", { className: settings_module_scss_1["default"].formtitle + " " + settings_module_scss_1["default"].margin_bottom },
                    "\uC601\uC5C5 \uC784\uC2DC\uC911\uC9C0",
                    React.createElement("div", { className: settings_module_scss_1["default"].button_form },
                        pauseTime,
                        React.createElement("button", { className: settings_module_scss_1["default"].modal_open_button, type: "button", onClick: clickModal }, "\uC124\uC815\uD558\uAE30"))),
                React.createElement("div", { className: settings_module_scss_1["default"].reopen },
                    "\uC601\uC5C5 \uC784\uC2DC\uC911\uC9C0 \uD574\uC81C",
                    React.createElement("button", { className: settings_module_scss_1["default"].reopen_button, type: "button", onClick: handleEndUpdate }, "\uD574\uC81C\uD558\uAE30")))),
        showPauseModal && React.createElement(pauseTime_1["default"], { clickModal: clickModal })));
}
exports["default"] = businessHours;
