"use strict";
exports.__esModule = true;
var react_1 = require("react");
var OrderList_module_scss_1 = require("./OrderList.module.scss");
function OrderList() {
    return (react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_list },
        react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].new_list_wrap },
            react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].list_title },
                react_1["default"].createElement("h4", null, "\uC2E0\uADDC 1\uAC74")),
            react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].new_list },
                react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].new_order_wrap },
                    react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_title },
                        react_1["default"].createElement("h3", { className: OrderList_module_scss_1["default"].order_number }, "\uBC30\uB2EC 00CRT"),
                        react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_paid }, "\uACB0\uC81C\uC644\uB8CC \u00B7 3\uBD84\uC804")),
                    react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_contents },
                        react_1["default"].createElement("p", { className: OrderList_module_scss_1["default"].order_item }, "[\uC624\uD508\uD2B9\uAC00] \uD654\uB355 \uB9C8\uB974\uAC8C\uB9AC\uB530 \uC0B0\uB9C8\uB974\uC9C0\uC790\uB178\uC0B0..."),
                        react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_price },
                            "23,000",
                            react_1["default"].createElement("p", null, "\uC6D0")))))),
        react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].list_title },
            react_1["default"].createElement("h4", null, "\uC9C4\uD589 3\uAC74")),
        react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].list },
            react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_wrap },
                react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_title },
                    react_1["default"].createElement("h3", { className: OrderList_module_scss_1["default"].order_number }, "\uBC30\uB2EC 00CRT"),
                    react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_paid }, "\uACB0\uC81C\uC644\uB8CC \u00B7 13\uBD84\uC804")),
                react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_contents },
                    react_1["default"].createElement("p", { className: OrderList_module_scss_1["default"].order_item }, "\uC2A4\uD30C\uC774\uC2DC \uCE58\uD0A8 \uC0CC\uB4DC\uC704\uCE58 \uC138\uD2B8"),
                    react_1["default"].createElement("div", { className: OrderList_module_scss_1["default"].order_price },
                        "23,000",
                        react_1["default"].createElement("p", null, "\uC6D0")))))));
}
exports["default"] = OrderList;
