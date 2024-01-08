import Item from "../item/item"
import Producto from '../../types/types';
import styles from './styles.module.css'
import ToCapital from '../toCapital/toCapital';

type Props = {
    productos: Producto[]
    titulo: string;
}

const ItemList = ({ productos, titulo }: Props) => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>{ToCapital(titulo)}</h1>
                <div className={styles.producto}>
                    {productos.map(item => {
                        return/*en este caso puse return porq use llaves*/ <Item key={item.id} {...item} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ItemList