import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Button } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./styles.module.css"
const Carrito = () => {

    const { carrito, cantidadTotal, vaciarCarrito, removeItem } = useContext(CartContext)

    const handleClick = (itemId: number) => {
        removeItem(itemId); // Llama a la función removeItem con el ID del producto
    };
    return (
        <>
            <div className="container">
                <h1 className={styles.text}>Carrito</h1>
                {carrito.map((prod) => (
                    <div key={prod.id}>
                        
                        <h3>{prod.titulo}</h3>
                        <img src={prod.imagen} alt={prod.titulo}></img>
                        <p>Precio unit: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>cant: {prod.cantidad}</p>
                        <Button onClick={() => handleClick(prod.id)} variant="danger"><BsFillTrashFill /></Button>
                        <br />
                       
                    </div>
                ))
                }
                {
                    carrito.length > 0 ? (
                    <>
                        <h2>Precio total: ${cantidadTotal()}</h2>
                        <Button variant="danger" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                        
                    </>) : (
                        <h2 className={styles.text}>El Carrito esta vacio</h2>
                    )
                    
                }
            </div>
        </>
    )
}

export default Carrito