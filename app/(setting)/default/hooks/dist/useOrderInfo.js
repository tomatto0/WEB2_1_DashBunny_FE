"use strict";
exports.__esModule = true;
exports.useUpdateStoreOrderInfo = exports.useGetStoreOrderInfo = void 0;
var react_query_1 = require("@tanstack/react-query");
var react_query_2 = require("@tanstack/react-query");
var orderInfo_1 = require("../api/orderInfo");
exports.useGetStoreOrderInfo = function () {
    return react_query_1.useQuery({
        queryKey: ["storeOrderInfo"],
        queryFn: orderInfo_1.getOrderInfo,
        staleTime: 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
};
exports.useUpdateStoreOrderInfo = function () {
    var mutate = react_query_2.useMutation({
        mutationFn: orderInfo_1.updateOrderInfo,
        onSuccess: function () {
            localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
        },
        onError: function (error) {
            console.log(error);
        }
    }).mutate;
    return { mutate: mutate };
};
exports["default"] = exports.useUpdateStoreOrderInfo;
