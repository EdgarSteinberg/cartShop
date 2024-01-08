import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import CartWidget from '../cartWidget/cartWidget'


const NavBar = () => {
    return(
        
        <nav className={styles.nav}>
            <Link to={"/"} className={styles.logo}><h1>EdgarShop</h1></Link>
            <ul className={styles.menu}>
            <li><Link className={styles.menuLink} to={"/"}>Inicio</Link></li>
            <li><Link className={styles.menuLink} to={"/productos"}>Productos</Link></li>
            <li><Link className={styles.menuLink} to={"/productos/medias"}>Medias</Link></li>
            <li><Link className={styles.menuLink} to={"/productos/pantalones"}>Pantalones</Link></li>
            <li><Link className={styles.menuLink} to={"/productos/remeras"}>Remeras</Link></li>
            <li><Link className={styles.menuLink} to={"/productos/buzos"}>Buzos</Link></li>
            <li><Link className={styles.menuLink} to={"/contacto"}>Contacto</Link></li>
            <li><CartWidget/></li>
            </ul>
        </nav>
       
    )
}

export default NavBar