import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { NotFound } from "../pages/NotFound";
import { GlobalError } from "../pages/GlobalError";
import { PageLoader } from "../components/ui/PageLoader";
import { APP_PATHS } from "./paths";

export const router = createBrowserRouter([
    {
        path: APP_PATHS.HOME,
        element: <MainLayout />,
        errorElement: <GlobalError />,
        HydrateFallback: PageLoader,

        children: [
            {
                errorElement: <GlobalError />,
                children: [
                    {
                        index: true,
                        lazy: async () => {
                            const { Home } = await import("../pages/Home");
                            return { Component : Home};
                        },
                    },
                    {
                        path: APP_PATHS.PRODUCT_DETAIL,
                        lazy: async () => {
                            const { ProductDetail } = await import("../pages/ProductDetail");
                            return { Component: ProductDetail }
                        }
                    },
                    {
                        path: '*',
                        element: <NotFound />,
                    },
                ],
            },
        ],
    },
]);