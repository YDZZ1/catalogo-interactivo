import { Outlet, NavLink, ScrollRestoration, useNavigation } from "react-router";
import { APP_PATHS } from "../router/paths";

const NAV_ITEMS = [
    {label: "Inicio", path: APP_PATHS.HOME},
] as const;

export const MainLayout = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return(
        <div>
            {isNavigating && (
                <div role="status" aria-live="polite">
                    Cargando vista...
                </div>
            )}

            <header>
                <nav aria-label="navegación principal">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === APP_PATHS.HOME}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>{new Date().getFullYear()} - Catálogo interactivo</p>
            </footer>

            <ScrollRestoration />
        </div>
    )
};