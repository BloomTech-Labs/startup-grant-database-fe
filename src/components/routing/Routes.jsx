import React from "react";
import LandingPage from "../landingpage/LandingPage";
import GrantContainer from "../grants/GrantContainer";
import RenderRoutes from "./RenderRoutes";
import {SuggestionForm} from "../suggestion/Suggestion";
import NewGrantTable from "../admin/NewGrantTable";
import UserSettings from "../../components/userProfile/userSettings";
import PrivateRoute from "./PrivateRoute";
import About from "../about/About";
import UserTable from "../admin/AdminUserTable/UserTable";
import AdminRoute from "./AdminRoute";
import MailingList from "../MailingList";
import ContactUsForm from "../contact/ContactUsForm";

const routes = [
    {
        key: "APP_ROOT",
        path: "/",
        exact: true,
        component: LandingPage
    },
    {
        key: "ABOUT",
        path: "/about",
        exact: true,
        component: About
    },
    {
        key: "GRANTS",
        path: "/grants",
        component: RenderRoutes,
        routes: [
            {
                path: "/grants",
                exact: true,
                key: "GRANTS_ROOT",
                component: GrantContainer
            },
            {
                path: "/grants/favorites",
                exact: true,
                key: "GRANTS_FAVORITES",
                component: GrantContainer
            }
        ]
    },
    {
        key: "SUGGESTION",
        path: "/suggestion",
        exact: true,
        component: SuggestionForm
    },
    {
        key: "ADMIN_TABLE",
        path: "/admin",
        exact: true,
        component: AdminRoute,
        renderComponent: {
            path: "/admin",
            exact: true,
            component: NewGrantTable
        }
    },
    {
        key: "USER_SETTINGS",
        path: "/settings",
        exact: true,
        component: PrivateRoute,
        renderComponent: {
            path: "/settings",
            exact: true,
            component: UserSettings
        }
    },
    {
        key: "ADMIN_USER_TABLE",
        path: "/manage",
        exact: true,
        component: AdminRoute,
        renderComponent: {
            path: "/manage",
            exact: true,
            component: UserTable
        }
    },
    {
        key: "MAILING_LIST",
        path: "/mailinglist",
        exact: true,
        component: MailingList
    },
    {
        key: "CONTACT_US",
        path: "/contact",
        exact: true,
        component: ContactUsForm
    }
];

export default routes;
