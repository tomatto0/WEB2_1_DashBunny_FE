"use strict";
exports.__esModule = true;
exports.useGetStoreBasicInfo = void 0;
var react_query_1 = require("@tanstack/react-query");
var defaultInfo_1 = require("../api/defaultInfo");
exports.useGetStoreBasicInfo = function () {
    return react_query_1.useQuery({
        queryKey: ["storeBasicInfo"],
        queryFn: defaultInfo_1.getBasicInfo,
        staleTime: 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
};
