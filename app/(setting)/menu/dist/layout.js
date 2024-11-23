"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var menu_module_scss_1 = require("./menu.module.scss");
var page_1 = require("../components/navMenu/page");
exports.metadata = {
    title: 'DashBunny - 메뉴세팅',
    description: '판매되는 메뉴와 메뉴그룹을 설정할 수 있습니다',
    icons: {
        icon: '/favicon.png'
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: menu_module_scss_1["default"].flex },
        React.createElement(page_1["default"], null),
        children));
}
exports["default"] = RootLayout;
