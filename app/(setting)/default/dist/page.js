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
var image_1 = require("next/image");
var useStoreInfo_1 = require("./hooks/useStoreInfo");
var react_1 = require("react");
var useStoreInfo_2 = require("./hooks/useStoreInfo");
function BasicInfo() {
    var _a = useStoreInfo_1.useGetStoreBasicInfo(), data = _a.data, isLoading = _a.isLoading;
    var initialState = {
        storePhone: '',
        storeLogo: '',
        bannerImage: '',
        storeDescription: '',
        promoShortsUrl: ''
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
    var _b = react_1.useReducer(reducer, initialState), formData = _b[0], dispatch = _b[1];
    // Update state when `data` is loaded
    react_1.useEffect(function () {
        if (data) {
            dispatch({
                type: 'SET_INITIAL_STATE',
                value: {
                    storePhone: data.storePhone || '',
                    storeLogo: data.storeLogo || '',
                    bannerImage: data.bannerImage || '',
                    storeDescription: data.storeDescription || '',
                    promoShortsUrl: data.ShortsUrl || ''
                }
            });
        }
    }, [data]);
    //입력될때마다 formdata가 업뎃되는 함수
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        dispatch({ type: 'UPDATE_FIELD', field: name, value: value });
    };
    var mutate = useStoreInfo_2["default"]().mutate;
    //폼데이터 제출
    var handleSubmit = function (e) {
        e.preventDefault();
        mutate(formData);
    };
    if (isLoading)
        return react_1["default"].createElement("div", null, "\uB85C\uB529 \uC911...");
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: settings_module_scss_1["default"].contents_wrap },
            react_1["default"].createElement("form", { className: "", action: "", encType: "multipart/form-data", onSubmit: handleSubmit },
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].page_title },
                    "\uAE30\uBCF8\uC815\uBCF4",
                    ' ',
                    react_1["default"].createElement("button", { className: settings_module_scss_1["default"].submit_button, type: "submit" }, "\uC800\uC7A5")),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C\uC774\uB984",
                    react_1["default"].createElement("input", { type: "text", defaultValue: data === null || data === void 0 ? void 0 : data.storeName, disabled: true, className: settings_module_scss_1["default"].short_input_text + " " + settings_module_scss_1["default"].disabled })),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC804\uD654\uBC88\uD638",
                    react_1["default"].createElement("input", { type: "text", placeholder: "000-0000-0000", className: settings_module_scss_1["default"].short_input_text, name: "storePhone", value: formData.storePhone, onChange: handleInputChange })),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC0C1\uD0DC",
                    react_1["default"].createElement("input", { type: "text", defaultValue: data === null || data === void 0 ? void 0 : data.storeStatus, disabled: true, className: settings_module_scss_1["default"].short_input_text + " " + settings_module_scss_1["default"].disabled })),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC8FC\uC18C",
                    react_1["default"].createElement("input", { type: "text", defaultValue: data === null || data === void 0 ? void 0 : data.storeAddress, disabled: true, className: settings_module_scss_1["default"].long_input_text + " " + settings_module_scss_1["default"].disabled })),
                react_1["default"].createElement("hr", { className: settings_module_scss_1["default"].margin_bottom }),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC18C\uAC1C \uD3B8\uC9D1",
                    react_1["default"].createElement("div", { className: settings_module_scss_1["default"].add_image_wrap },
                        react_1["default"].createElement("div", { className: settings_module_scss_1["default"].add_image_block },
                            "\uB9E4\uC7A5 \uB85C\uACE0",
                            react_1["default"].createElement("div", { className: settings_module_scss_1["default"].add_image }, (data === null || data === void 0 ? void 0 : data.storeLogo) ? (react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: data.storeLogo, alt: "storeLogo", width: 102, height: 102, quality: 75 })) : (react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/img/setting_img_placeholder.jpg", alt: "placeholderImg", width: 102, height: 102 })))),
                        react_1["default"].createElement("div", { className: settings_module_scss_1["default"].add_image_block },
                            "\uBC30\uB108 \uC774\uBBF8\uC9C0",
                            react_1["default"].createElement("div", { className: settings_module_scss_1["default"].add_image }, (data === null || data === void 0 ? void 0 : data.storeLogo) ? (react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: data.bannerImage, alt: "storebannerImg", width: 102, height: 102, quality: 75 })) : (react_1["default"].createElement(image_1["default"], { "aria-hidden": true, src: "/img/setting_img_placeholder.jpg", alt: "placeholderImg", width: 102, height: 102 })))))),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uC18C\uAC1C",
                    react_1["default"].createElement("textarea", { wrap: "soft", placeholder: "\uAC00\uAC8C \uC18C\uAC1C\uB97C \uC801\uC5B4\uC8FC\uC138\uC694", rows: 2, className: settings_module_scss_1["default"].text_area, name: "storeDescription", value: formData.storeDescription, onChange: handleInputChange })),
                react_1["default"].createElement("div", { className: settings_module_scss_1["default"].formtitle },
                    "\uAC00\uAC8C \uD64D\uBCF4\uC6A9 shorts URL\uC8FC\uC18C",
                    react_1["default"].createElement("input", { type: "text", placeholder: "https://youtube.com/shorts/PgIJlbWb7Nc?feature=shared", className: "" + settings_module_scss_1["default"].long_input_text, name: "promoShortsUrl", value: formData.promoShortsUrl, onChange: handleInputChange }))))));
}
exports["default"] = BasicInfo;
