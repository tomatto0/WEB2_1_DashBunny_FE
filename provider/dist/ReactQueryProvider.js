'use client';
"use strict";
exports.__esModule = true;
var react_query_1 = require("@tanstack/react-query");
var react_query_devtools_1 = require("@tanstack/react-query-devtools");
var queryClient = new react_query_1.QueryClient();
function ReactQueryConfigContext(_a) {
    var children = _a.children;
    return (React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        children,
        React.createElement(react_query_devtools_1.ReactQueryDevtools, { initialIsOpen: true })));
}
exports["default"] = ReactQueryConfigContext;
