'use client';
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var ParseTimeError = /** @class */ (function (_super) {
    __extends(ParseTimeError, _super);
    function ParseTimeError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'ParseTimeError';
        return _this;
    }
    return ParseTimeError;
}(Error));
function BusinessHour(_a) {
    var businessHour = _a.businessHour, onStateChange = _a.onStateChange;
    function parseTimeRange(input) {
        var match = businessHour.match(/(매일)\s(오전\s\d+시|오후\s\d+시)\s~\s(오전\s\d+시|오후\s\d+시)/);
        if (!match)
            throw new Error('Invalid format');
        var _ = match[0], dayLabel = match[1], startTime = match[2], endTime = match[3];
        return { dayLabel: dayLabel, startTime: startTime, endTime: endTime };
    }
    var _b = react_2.useState(''), stupdate = _b[0], setStUpdate = _b[1];
    var _c = react_2.useState(''), edupdate = _c[0], setEdUpdate = _c[1];
    var startTimeHandle = function (e) {
        setStUpdate(e.target.value);
        console.log(stupdate);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { htmlFor: "start-time", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white" }, "Start time:"),
            react_1["default"].createElement("div", { className: "relative" },
                react_1["default"].createElement("div", { className: "absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none" },
                    react_1["default"].createElement("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24" },
                        react_1["default"].createElement("path", { "fill-rule": "evenodd", d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z", "clip-rule": "evenodd" }))),
                react_1["default"].createElement("input", { type: "time", id: "start-time", className: "bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", min: "09:00", max: "18:00", required: true, onChange: startTimeHandle }))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { htmlFor: "end-time", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white" }, "End time:"),
            react_1["default"].createElement("div", { className: "relative" },
                react_1["default"].createElement("div", { className: "absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none" },
                    react_1["default"].createElement("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24" },
                        react_1["default"].createElement("path", { "fill-rule": "evenodd", d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z", "clip-rule": "evenodd" }))),
                react_1["default"].createElement("input", { type: "time", id: "end-time", className: "bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", min: "09:00", max: "18:00", required: true })))));
}
exports["default"] = BusinessHour;
