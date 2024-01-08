import  Producto  from '../../types/types';
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const Item = ({titulo, imagen, precio ,id,categoria} :Producto) => {
    return(
        <>
            <div className={styles.productos}>
            <img className={styles.img} src={imagen} alt={titulo} />
            <div className={styles.contenedor}>
            <h4 className={styles.titulo}>{titulo}</h4>
            <p className={styles.precio}> Precio: ${precio}</p>
            <p className={styles.categoria}> Categoria {categoria} </p>
            <Link className={styles.ver} to={`/item/${id}`}>ver mas</Link>
            </div>
            </div>
           
        </>
    )
}

export default Item