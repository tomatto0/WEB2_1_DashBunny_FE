"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var page_1 = require("../components/navDefault/page");
var layout_module_scss_1 = require("./layout.module.scss");
exports.metadata = {
    title: 'DashBunny - DefaultSetting',
    description: '가게 기본정보를 세팅할 수 있습니다',
    icons: {
        icon: '/favicon.png'
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: layout_module_scss_1["default"].flex },
        React.createElement(page_1["default"], null),
        children));
}
exports["default"] = RootLayout;
