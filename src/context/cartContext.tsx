import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import Producto from "../types/types";

interface CartContextProps {
    carrito: Producto[];
    setCarrito: Dispatch<SetStateAction<Producto[]>>;
    agregarAlCarrito: (item: Producto, cantidad: number) => void;
    cantidadEnCarrito: () => number; // Agregamos la función al contexto
    cantidadTotal: () => number,
    vaciarCarrito: () => void,
    removeItem: (itemId: number) => void
   
}

export const CartContext = createContext<CartContextProps>({
    carrito: [],
    setCarrito: () => { },
    agregarAlCarrito: () => { },
    cantidadEnCarrito: () => 0,
    cantidadTotal: () => 0,
    vaciarCarrito: () => [],
    removeItem: null as any
});

interface CartComponentContextProps {
    children: ReactNode;
}

const carritoInicial = JSON.parse(localStorage.getItem("carrito") || "[]")


const CartComponentContext = ({ children }: CartComponentContextProps) => {
    
    const [carrito, setCarrito] = useState<Producto[]>(carritoInicial);

    const agregarAlCarrito = (item: Producto, cantidad: number) => {
        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito]
        const productoExistente = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (productoExistente) {
            productoExistente.cantidad += cantidad

        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito)
        console.log("Carrito actualizado:", nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const cantidadTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const removeItem = (itemId: number): void => {
        const cartUpdated = carrito.filter((prod) => prod.id !== itemId);
        setCarrito(cartUpdated);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            setCarrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            cantidadTotal,
            vaciarCarrito,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartComponentContext;
