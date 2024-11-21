'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var horizontalNav_module_scss_1 = require("./horizontalNav.module.scss");
var react_2 = require("react");
var verticalNav_1 = require("../verticalNav");
var link_1 = require("next/link");
function HorizontalNav() {
    //현재시간 가져오는 함수
    var _a = react_2.useState(''), currentTime = _a[0], setCurrentTime = _a[1];
    react_2.useEffect(function () {
        var interval = setInterval(function () {
            var options = {
                month: '2-digit',
                day: '2-digit',
                weekday: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
                timeZone: 'Asia/Seoul'
            };
            var date = new Date();
            var formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(date);
            setCurrentTime(formattedDate);
        }, 10000);
        return function () { return clearInterval(interval); };
    }, []);
    //사이드 NAV onoff함수
    var _b = react_2.useState(false), showSideNav = _b[0], setShowSideNav = _b[1];
    var clickModal = function () { return setShowSideNav(!showSideNav); };
    //화면 전체크기로 변경하는 함수
    var handleFullScreen = function () {
        var element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen(); // 표준 브라우저
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(); // Safari
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen(); // Internet Explorer/Edge
        }
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].h_nav },
            react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].h_nav_left },
                react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/navBar.svg", alt: "Window icon", width: 36, height: 36, onClick: clickModal }),
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].status_box },
                        react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].status_color }),
                        "\uC601\uC5C5\uC911"))),
            react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].h_nav_right },
                react_1["default"].createElement("p", null, currentTime),
                react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].window_status },
                    react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].window_wrap },
                        react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/window_min.svg", alt: "Window icon", width: 36, height: 36 })),
                    react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].window_wrap },
                        react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/window_minimize.svg", alt: "Window icon", width: 36, height: 36, onClick: handleFullScreen })),
                    react_1["default"].createElement("div", { className: horizontalNav_module_scss_1["default"].window_wrap },
                        react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/window_close.svg", alt: "Window icon", width: 36, height: 36 }))))),
        showSideNav && react_1["default"].createElement(verticalNav_1["default"], { clickModal: clickModal })));
}
exports["default"] = HorizontalNav;
