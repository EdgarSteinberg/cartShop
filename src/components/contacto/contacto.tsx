import { useState } from "react"
import styles from "./styles.module.css"

const Contacto = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        telefono: ""
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Enviado', valores)
        resetForm();
    }

    const handleValores = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        setValores({
            nombre: '',
            email: '',
            telefono: ''
        });
    }

    return (
        <>
            <div className={"container"}>
                <h1 className={styles.menuLink}>Contacto</h1>

                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Ingresa tu nombre"
                        value={valores.nombre}
                        onChange={handleValores}
                        name="nombre"
                    />

                    <input type="email"
                        placeholder="Ingresa tu e-mail"
                        value={valores.email}
                        onChange={handleValores}
                        name="email"
                    />

                    <input type="telefono"
                        placeholder="Ingresa tu telefono"
                        value={valores.telefono}
                        onChange={handleValores}
                        name="telefono"
                    />

                    <button className={styles.enviar} type="submit">Enviar</button>

                </form>
            </div>
        </>
    )
}

export default Contacto