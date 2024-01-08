import data from '../data/data.json'
import Producto from '../types/types'

const PedirDatos = () :Promise<Producto[]> => {
    return new Promise<Producto[]>((resolve,/* reject */) => {
        setTimeout(() => {
            resolve(data as Producto[])
        }, 500)
    })
}

export const PedirItemPorId = (id: number): Promise<Producto> => {
    return new Promise<Producto>((resolve, reject) => {
    const item = data.find((el) => el.id === id)

    if (item) {
        const itemConCantidad: Producto = { ...item, cantidad: 1 }; // Definir una cantidad predeterminada
        resolve(itemConCantidad);
    } else {
        reject({
            error: "No se encontro el producto"
        })
    }
})
}

export default PedirDatos