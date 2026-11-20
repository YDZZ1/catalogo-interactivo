import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { API_CONNECTION, type Producto } from "../router/API_CONNECTION";

export const Home = () => {
    const [datos, setDatos] = useState<Producto[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        API_CONNECTION()
            .then((resultado) => {
                setDatos(resultado);
            })
            .catch((err) => {
                console.error("Error técnico al cargar productos:", err);
                setError("No se pudieron cargar los productos. Intenta más tarde.")
            });
    }, []);

    if (error) return <p>{error}</p>;
    if (datos.length === 0) return <p>Cargando...</p>;

    return (
        <section>
            <h1>Listado de productos</h1>
            <ul style={{ listStyle: "none" }}>
                {datos.map((item) => (
                    <li key={item.id}>
                        <button onClick={() => navigate(`/producto/${item.id}`)}>
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}