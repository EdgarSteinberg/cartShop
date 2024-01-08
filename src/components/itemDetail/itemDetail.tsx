import React, { useContext, useState } from "react";
import Producto from "../../types/types";
import Counter from "../counter/counter";
import styles from "./styles.module.css";
import { CartContext } from "../../context/cartContext";

const ItemDetail: React.FC<{ item: Producto }> = ({ item }) => {
    const { agregarAlCarrito: agregarProductoAlCarrito } = useContext(CartContext);
    const [mostrar, setMostrar] = useState(true);
    const [cantidad, setCantidad] = useState<number>(1);

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    };

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const agregarItemAlCarrito = () => {
        agregarProductoAlCarrito(item, cantidad);
        setMostrar(false); // Oculta el contador después de agregar al carrito
    };

    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={item.imagen} alt={item.titulo} />
                <div className={styles.flex}>
                    <h4>{item.titulo}</h4>
                    <p>{item.descripcion}</p>
                    <h1> ${item.precio}</h1>
                    <p>{item.categoria}</p>
                    {cantidad > 0 && mostrar && (
                        <Counter
                            cantidad={cantidad}
                            handleSumar={handleSumar}
                            handleRestar={handleRestar}
                            handleAgregar={agregarItemAlCarrito}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
