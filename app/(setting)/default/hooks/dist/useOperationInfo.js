"use strict";
exports.__esModule = true;
exports.useEndPauseTime = exports.useUpdatePauseTime = exports.useUpdateOperationInfo = exports.useGetOperationInfo = void 0;
var react_query_1 = require("@tanstack/react-query");
var react_query_2 = require("@tanstack/react-query");
var operationInfo_1 = require("../api/operationInfo");
exports.useGetOperationInfo = function () {
    return react_query_1.useQuery({
        queryKey: ["OperationInfo"],
        queryFn: operationInfo_1.getOperationInfo,
        staleTime: 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
};
exports.useUpdateOperationInfo = function () {
    var queryClient = react_query_2.useQueryClient();
    var updateOperationInfoMutate = react_query_2.useMutation({
        mutationFn: operationInfo_1.updateOperationInfo,
        onSuccess: function () {
            localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
            queryClient.invalidateQueries({ queryKey: ['OperationInfo'] });
        },
        onError: function (error) {
            console.log(error);
        }
    }).mutate;
    return { updateOperationInfoMutate: updateOperationInfoMutate };
};
exports.useUpdatePauseTime = function () {
    var queryClient = react_query_2.useQueryClient();
    var updatePauseTimeMutate = react_query_2.useMutation({
        mutationFn: operationInfo_1.updatePauseInfo,
        onSuccess: function () {
            localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
            queryClient.invalidateQueries({ queryKey: ['OperationInfo'] });
        },
        onError: function (error) {
            console.log(error);
        }
    }).mutate;
    return { updatePauseTimeMutate: updatePauseTimeMutate };
};
exports.useEndPauseTime = function () {
    var queryClient = react_query_2.useQueryClient();
    var endPauseTimeMutate = react_query_2.useMutation({
        mutationFn: operationInfo_1.endPauseInfo,
        onSuccess: function () {
            localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
            queryClient.invalidateQueries({ queryKey: ['OperationInfo'] });
        },
        onError: function (error) {
            console.log(error);
        }
    }).mutate;
    return { endPauseTimeMutate: endPauseTimeMutate };
};
