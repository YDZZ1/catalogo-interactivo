import { Link, useParams } from "react-router";
import { APP_PATHS } from "../router/paths";
import { useState, useEffect } from "react";
import { API_CONNECTION, type Producto } from "../router/API_CONNECTION";

export const ProductDetail = () => {
    const { id } = useParams();

    const [datos, setDatos] = useState<Producto | null>(null);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        API_CONNECTION(Number(id))
            .then((resultado) => {
                setDatos(resultado)
            })
            .catch(() => {
                setError(true);
            });

    }, [id])

    if (error) return <p>Ocurrió un error al buscar el producto.</p>;
    if (!datos) return <p>Cargando....</p>;

    return (
        <section>
            <h1>{datos.title}</h1>
            <p>Precio: {datos.price}</p>
            <p>{datos.description}</p>
            <img src={datos.image} alt={datos.title}/>
            <br />
            <Link to={APP_PATHS.HOME}>Volver al inicio</Link>
        </section>
    );
};