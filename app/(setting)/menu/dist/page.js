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
var menu_module_scss_1 = require("@/styles/menu.module.scss");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var useMenu_1 = require("./hooks/useMenu");
function menuSetting() {
    var _a = useMenu_1.useGetAllMenu(), data = _a.data, isLoading = _a.isLoading;
    //menu array를 setState를 통해서 관리
    var menuArray = (data === null || data === void 0 ? void 0 : data.menus) || [];
    var menuGroupArray = (data === null || data === void 0 ? void 0 : data.menuGroups) || [];
    var _b = react_1.useState(menuArray), menuArrayState = _b[0], setMenuArrayState = _b[1];
    var _c = react_1.useState(null), activeGroupId = _c[0], setActiveGroupId = _c[1]; // 활성화된 그룹 ID
    react_1.useEffect(function () {
        if (menuArray) {
            setMenuArrayState(menuArray);
        }
    }, [menuArray]);
    //그룹리스트 불러오기
    var handleGroupList = function (groupId) {
        var _a = useMenu_1.useGetGroupMenu(groupId), data = _a.data, isError = _a.isError, error = _a.error, isLoading = _a.isLoading;
        if (isError) {
            console.error('Error fetching group menus:', error); // 에러 로그 출력
            alert('그룹 메뉴를 가져오는 중 오류가 발생했습니다.'); // 사용자에게 알림
            return;
        }
        if (!isLoading && data) {
            setMenuArrayState(data); // 데이터를 상태에 저장
            setActiveGroupId(groupId); // 활성화된 그룹 ID 업데이트
        }
    };
    //개별 품절 처리
    //체크를 할때마다 체크값이 새로 업데이트된 menuArray가 새로 State에 저장됨
    var handleSoldOutToggle = function (menuId) {
        setMenuArrayState(function (prevMenuArray) {
            return prevMenuArray.map(function (menu) {
                return menu.menuId === menuId ? __assign(__assign({}, menu), { isSoldOut: !menu.isSoldOut }) : menu;
            });
        });
    };
    // 전체 그룹 선택
    var handleAllGroupClick = function () {
        setMenuArrayState(menuArray); // 전체 메뉴 상태로 복원
        setActiveGroupId(null); // 활성화된 그룹 ID 초기화
    };
    // menuArray를 받아서 기본 initialstate를 만드는 reduce함수
    var createInitialState = function (menuArray) {
        return menuArray.reduce(function (state, menu) {
            state[menu.menuId] = false; // 초기값: 모두 체크되지 않은 상태
            return state;
        }, {});
    };
    var initialState = createInitialState(menuArray);
    // Reducer function to toggle checkbox state
    var reducer = function (state, action) {
        var _a;
        switch (action.type) {
            case 'TOGGLE_CHECKED':
                if (action.menuId == null)
                    return state;
                return __assign(__assign({}, state), (_a = {}, _a[action.menuId] = !state[action.menuId], _a));
            case 'RESET_CHECKED':
                return createInitialState(menuArray); // 상태 초기화
            default:
                return state;
        }
    };
    var _d = react_1.useReducer(reducer, initialState), checkedState = _d[0], dispatch = _d[1];
    react_1.useEffect(function () {
        setMenuArrayState(menuArray); // 데이터가 바뀌면 상태 초기화
        dispatch({ type: 'RESET_CHECKED' });
    }, [menuArray]);
    // 사이드 Handle 체크박스 토글시 checkedState에 업데이트
    var handleCheckboxToggle = function (menuId) {
        dispatch({ type: 'TOGGLE_CHECKED', menuId: menuId });
    };
    var updateMultifleSoldOutMutate = useMenu_1.useMultifleSoldOut().updateMultifleSoldOutMutate;
    // 체크된 다중 핸들 품절 api처리
    var handleSoldOutAction = function () {
        var selectedIds = Object.keys(checkedState)
            .filter(function (id) { return checkedState[Number(id)]; })
            .map(Number);
        // API call with selected IDs
        console.log('Selected Menu IDs for Sold Out:', selectedIds);
        updateMultifleSoldOutMutate(selectedIds);
    };
    var updateMultifleDeleteMutate = useMenu_1.useMultifleDelete().updateMultifleDeleteMutate;
    // 체크된 다중 핸들 삭제 api처리
    var handleDeleteAction = function () {
        var selectedIds = Object.keys(checkedState)
            .filter(function (id) { return checkedState[Number(id)]; })
            .map(Number);
        // API call with selected IDs
        console.log('Selected Menu IDs for Delete:', selectedIds);
        // TODO: Implement API call here
        updateMultifleDeleteMutate(selectedIds);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: menu_module_scss_1["default"].contents_wrap },
            react_1["default"].createElement("div", { className: menu_module_scss_1["default"].page_title },
                "\uBA54\uB274",
                react_1["default"].createElement(link_1["default"], { href: "/menu/add" },
                    react_1["default"].createElement("div", { className: menu_module_scss_1["default"].add_menu_button },
                        react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/add_white.svg", alt: "add_menu_plus_icon", width: 14, height: 14 }),
                        "\uBA54\uB274 \uCD94\uAC00"))),
            react_1["default"].createElement("div", { className: menu_module_scss_1["default"].groups },
                react_1["default"].createElement("div", { className: menu_module_scss_1["default"].group + " " + (activeGroupId === null ? menu_module_scss_1["default"].active : ''), onClick: handleAllGroupClick }, "\uC804\uCCB4"), menuGroupArray === null || menuGroupArray === void 0 ? void 0 :
                menuGroupArray.map(function (menuGroup) { return (react_1["default"].createElement("div", { key: menuGroup === null || menuGroup === void 0 ? void 0 : menuGroup.groupId, className: menu_module_scss_1["default"].group + " " + (activeGroupId === menuGroup.groupId ? menu_module_scss_1["default"].active : ''), onClick: function () { return handleGroupList(menuGroup.groupId); } }, menuGroup.groupName)); })),
            react_1["default"].createElement("div", { className: menu_module_scss_1["default"].menu_list },
                react_1["default"].createElement("div", { className: menu_module_scss_1["default"].button_wrap },
                    react_1["default"].createElement("button", { className: menu_module_scss_1["default"].delete_button, type: "button", onClick: handleDeleteAction }, "\uC0AD\uC81C"),
                    react_1["default"].createElement("button", { className: menu_module_scss_1["default"].soldout_button, type: "button", onClick: handleSoldOutAction }, "\uD488\uC808")),
                react_1["default"].createElement("div", { className: menu_module_scss_1["default"].list_bar_wrap },
                    "\uC0C1\uD488",
                    react_1["default"].createElement("div", { className: menu_module_scss_1["default"].list_bar_right },
                        react_1["default"].createElement("div", null, "\uC7AC\uACE0\uC218\uB7C9"),
                        react_1["default"].createElement("div", { className: menu_module_scss_1["default"].soldout_name },
                            "\uD488\uC808\uD45C\uC2DC",
                            react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/menu_filter.svg", alt: "add_menu_plus_icon", width: 15, height: 15 })),
                        react_1["default"].createElement("label", { className: "" + menu_module_scss_1["default"].inline_flex, htmlFor: "\uC804\uCCB4\uCCB4\uD06C" },
                            react_1["default"].createElement("input", { type: "checkbox", className: "" + menu_module_scss_1["default"].checkbox, 
                                // onChange={storehandleChange}
                                id: "\uC804\uCCB4\uCCB4\uD06C", name: "\uC804\uCCB4\uCCB4\uD06C" })))), menuArrayState === null || menuArrayState === void 0 ? void 0 :
                menuArrayState.map(function (menu) { return (react_1["default"].createElement("div", { key: menu === null || menu === void 0 ? void 0 : menu.menuId, className: menu_module_scss_1["default"].menu },
                    react_1["default"].createElement("div", { className: menu_module_scss_1["default"].menu_left },
                        react_1["default"].createElement("div", { className: menu_module_scss_1["default"].add_image }, menu.menuImage ? (react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: menu.menuImage, alt: "menuImage", width: 72, height: 72 })) : (react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/icons/setting_menu_img_placeholder.jpg", alt: "placeholder_img", width: 72, height: 72 }))),
                        react_1["default"].createElement("div", { className: menu_module_scss_1["default"].menu_title },
                            react_1["default"].createElement("p", null, menu === null || menu === void 0 ? void 0 : menu.menuName),
                            react_1["default"].createElement("p", null, menu === null || menu === void 0 ? void 0 : menu.price))),
                    react_1["default"].createElement("div", { className: menu_module_scss_1["default"].menu_right },
                        menu.stockAvailable ? (react_1["default"].createElement("div", { className: menu_module_scss_1["default"].left_count }, menu.menuStock)) : (''),
                        react_1["default"].createElement("label", { className: "" + menu_module_scss_1["default"].inline_flex, htmlFor: "\uD488\uC808\uC5EC\uBD80-" + menu.menuId },
                            react_1["default"].createElement("input", { type: "checkbox", className: "" + menu_module_scss_1["default"].peer, checked: menu === null || menu === void 0 ? void 0 : menu.isSoldOut, onChange: function () { return handleSoldOutToggle(menu === null || menu === void 0 ? void 0 : menu.menuId); }, id: "\uD488\uC808\uC5EC\uBD80-" + (menu === null || menu === void 0 ? void 0 : menu.menuId) })),
                        react_1["default"].createElement("label", { className: "" + menu_module_scss_1["default"].inline_flex, htmlFor: "\uBC30\uC5F4\uCD94\uAC00\uC6A9" },
                            react_1["default"].createElement("input", { type: "checkbox", className: "" + menu_module_scss_1["default"].checkbox, checked: checkedState[menu.menuId] || false, onChange: function () { return handleCheckboxToggle(menu.menuId); }, id: "\uBC30\uC5F4\uCD94\uAC00\uC6A9" }))))); })))));
}
exports["default"] = menuSetting;
