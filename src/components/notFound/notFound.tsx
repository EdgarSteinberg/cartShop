import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
const NotFound = () => {
    return(
        <>
        <div className={styles.centrar}>
        <h1>Pagina No Encontrada</h1>
        <Link to={'/'}><Button variant='primary'>ir a Productos</Button></Link>
        </div>
        </>
    )
}

export default NotFound