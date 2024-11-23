"use strict";
exports.__esModule = true;
exports.useUpdateStoreInfo = void 0;
var react_query_1 = require("@tanstack/react-query");
var defaultInfo_1 = require("../api/defaultInfo");
exports.useUpdateStoreInfo = function () {
    var mutate = react_query_1.useMutation({
        mutationFn: defaultInfo_1.updateBasicInfo,
        onSuccess: function () {
            localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
        },
        onError: function (error) {
            console.log(error);
        }
    }).mutate;
    return { mutate: mutate };
};
exports["default"] = exports.useUpdateStoreInfo;
