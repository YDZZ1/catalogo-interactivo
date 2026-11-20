import { Link } from "react-router";
import { APP_PATHS } from "../router/paths";

export const NotFound = () => {
    return(
        <div>
            <h1>Error 404</h1>
            <p>Página no encontrada.</p>

            <Link to={APP_PATHS.HOME}>Volver al inicio</Link>
        </div>
    )
};