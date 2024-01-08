import { Link } from "react-router-dom"
import styles from './styles.module.css'
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { BsCart4 } from 'react-icons/bs';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext)

    return(
        <>
        <Link className={styles.menuLink} to={"/carrito"}>
            <BsCart4/>
            <span>{ cantidadEnCarrito() }</span>
        </Link>
       
        </>
    )
}

export default CartWidget