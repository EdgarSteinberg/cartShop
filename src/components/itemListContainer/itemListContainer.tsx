import { useEffect, useState } from 'react';
import ItemList from '../itemList/itemList';
import Producto from '../../types/types';
import PedirDatos from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';


interface ParamsType {
    categoria?: string;
    // Otras propiedades de tus parámetros si las tienes
  }

const ItemListContainer = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const {categoria}: ParamsType = useParams()
    const [titulo, setTitulo] = useState<string>("Productos")

    useEffect(() => {
        PedirDatos()
            .then((res) => {
                if(categoria){
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria)
                } else {
                    setProductos(res)
                    setTitulo("Productos")
                }
            })
            .catch((error) => {
                console.error('Error al obtener datos:', error);
            });
    }, [categoria]);

    return (
        <>
            <ItemList productos={productos} titulo={titulo} />
        </>
    );
};

export default ItemListContainer;
