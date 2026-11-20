import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { APP_PATHS } from "../router/paths";


export const GlobalError = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)){
        return (
            <section>
                <h1>Error: {error.status}</h1>
                <p>{error.statusText}</p>

                <Link to={APP_PATHS.HOME}>Volver al inicio</Link>
            </section>
        )
    }

    return (
        <section>
            <h1>Algo salió mal en la aplicación</h1>
            <p>{error instanceof Error ? error.message : "Error desconocido"}</p>
            <Link to={APP_PATHS.HOME}>Reintentar</Link>
        </section>
    )
};