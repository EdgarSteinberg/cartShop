import Button from 'react-bootstrap/Button';
import styles from './styles.module.css'
import Swal from 'sweetalert2'

interface CounterProps {
    cantidad: number;
    handleSumar: () => void;
    handleRestar: () => void;
    handleAgregar: () => void;
  }

const Counter:  React.FC<CounterProps> = ({cantidad, handleRestar, handleSumar,handleAgregar}) => {

    const handleAgregarConAlerta = () => {
        handleAgregar(); // Primero, se maneja la lógica para agregar al carrito

        // Después, se muestra la alerta
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: 'Producto agregado al carrito'
          });
    };
    

    return (
        <>
            <div className={styles.count}>
                <Button className={styles.btn} onClick={handleRestar}>-</Button>
                <p className={styles.p}>{cantidad}</p>
                <Button className={styles.btn} onClick={handleSumar}>+</Button>
            </div>
            {/* <Button variant="outline-success" onClick={handleAgregar}>Agregar al carrito</Button> */}
            <Button className={styles.carrito}  onClick={handleAgregarConAlerta}>Agregar al carrito</Button>
        </>
    )
}
export default Counter