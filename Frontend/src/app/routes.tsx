import type { RouteObject } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import AuthLayout from "../layouts/AuthLayout";

import Test from "../pages/Home/test"
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {index: true, element: <Test/>}
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {path: "login", element: <Login/>},
            {path: "register", element: <Registration />}
        ]
    }
];