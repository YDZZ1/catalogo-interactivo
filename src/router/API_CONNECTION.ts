export interface Producto  {
    id? : number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export async function API_CONNECTION(id?: number): Promise<any> {
    try {
        const url = id !== undefined 
        ? `https://fakestoreapi.com/products/${id}`
        : "https://fakestoreapi.com/products?limit=10"
        
        const req = await fetch(url);

        if (!req.ok) throw new Error(`Error HTTP: ${req.status}`)

        const datos = await req.json();

        return datos;

    }catch (error){
        console.error("Fallo en la petición:", error);
        throw error;
    }
};