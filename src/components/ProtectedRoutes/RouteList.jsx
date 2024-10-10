import ProtectedRoute from ".";
import { Dashboard } from "../../pages/Dashboard";
import { Homepage } from "../../pages/Homepage";
import { Login } from "../../pages/Login";
import { Menu } from "../../pages/Menu";
import { DetailMenu } from "../../pages/Menu/DetailMenu";
import { Register } from "../../pages/Register";

export const RouteList = [
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/menu",
        element: <Menu />,
    },
    {
        path: "/menu/:id",
        element: <DetailMenu />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: "/add-menu",
        element: 
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>,
    },
    {
        path: "/menu/:id",
        element: 
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>,
    },
]