import React from "react";
import LandingPage from "../landingpage/LandingPage";
import GrantContainer from "../grants/GrantContainer";
import RenderRoutes from "./RenderRoutes";
import {SuggestionForm} from "../suggestion/Suggestion";
import GrantTable from '../admin/GrantTable'
import About from "../about/About";

const routes = [
    {
        key: "APP_ROOT",
        path: "/",
        exact: true,
        component: LandingPage
    },
    {
        key: "ABOUT",
        path: '/about',
        exact: true,
        component: About
    },
    {
        key: "GRANTS",
        path: "/grants",
        component: RenderRoutes,
        routes: [
            {
                path: '/grants',
                exact: true,
                key: 'GRANTS_ROOT',
                component: GrantContainer
            },
            {
                path: '/grants/favorites',
                exact: true,
                key: 'GRANTS_FAVORITES',
                component: GrantContainer
            },
        ]
    },
    {
        key: "SUGGESTION",
        path: "/suggestion",
        exact: true,
        component: SuggestionForm
    },
    {
        key: 'ADMIN_TABLE',
        path: '/admin',
        exact: true,
        component: GrantTable,
    },
];

export default routes;
