import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Producto from '../../types/types';
import { PedirItemPorId } from "../../helpers/pedirDatos"
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState<Producto>()
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        PedirItemPorId(Number(id))
            .then((res: Producto) => {
                setItem(res)
            })
    }, [id])
    return (
        <>
            {item && (
                <div>
                   <ItemDetail item={item}/>
                </div>
            )}
        </>
    )
}

export default ItemDetailContainer