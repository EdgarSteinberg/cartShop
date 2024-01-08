import React, { useContext, useState } from "react";
import Producto from "../../types/types";
import Counter from "../counter/counter";
import styles from "./styles.module.css"
import { CartContext } from "../../context/cartContext";


const ItemDetail: React.FC<{ item: Producto }> = ({ item }) => {

    const { agregarAlCarrito } = useContext(CartContext)

    const [cantidad, setCantidad] = useState<number>(1)

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        (cantidad > 1) && setCantidad(cantidad - 1)
    }


    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={item.imagen} alt={item.titulo} />
                <div className={styles.flex}>
                    <h4>{item.titulo}</h4>
                    <p>{item.descripcion}</p>
                    <h1> ${item.precio}</h1>
                    <p>{item.categoria}</p>
                    <Counter
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
