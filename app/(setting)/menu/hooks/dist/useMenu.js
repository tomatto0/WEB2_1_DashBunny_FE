"use strict";
exports.__esModule = true;
exports.useMultifleDelete = exports.useMultifleSoldOut = exports.useGetGroupMenu = exports.useGetAllMenu = void 0;
var react_query_1 = require("@tanstack/react-query");
var react_query_2 = require("@tanstack/react-query");
var menu_1 = require("../api/menu");
exports.useGetAllMenu = function () {
    return react_query_1.useQuery({
        queryKey: ["MenuList"],
        queryFn: menu_1.getAllMenu,
        staleTime: 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
};
exports.useGetGroupMenu = function (groupId) {
    return react_query_1.useQuery({
        queryKey: ["MenuList", groupId],
        queryFn: function () { return menu_1.getGroupMenu(groupId); },
        staleTime: 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
};
exports.useMultifleSoldOut = function () {
    var queryClient = react_query_2.useQueryClient();
    var updateMultifleSoldOutMutate = react_query_2.useMutation({
        mutationFn: function (selectedIds) { return menu_1.updateMultifleSoldOut(selectedIds); },
        onSuccess: function () {
            localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
            queryClient.invalidateQueries({ queryKey: ['MenuList'] });
        },
        onError: function (error) {
            console.log(error);
        }
    }).mutate;
    return { updateMultifleSoldOutMutate: updateMultifleSoldOutMutate };
};
exports.useMultifleDelete = function () {
    var queryClient = react_query_2.useQueryClient();
    var updateMultifleDeleteMutate = react_query_2.useMutation({
        mutationFn: function (selectedIds) { return menu_1.updateMultifleDelete(selectedIds); },
        onSuccess: function () {
            localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
            queryClient.invalidateQueries({ queryKey: ['MenuList'] });
        },
        onError: function (error) {
            console.log(error);
        }
    }).mutate;
    return { updateMultifleDeleteMutate: updateMultifleDeleteMutate };
};
