import { useEffect, useState } from "react"

type PokemonProp = {
    name: string;
    image: string;
    sprites: Sprite;
    id: number
}
type Sprite = {
     front_default: string;
    // Otras propiedades de sprites si las hay
 }

const Pokemon = () => {
    const [pokemon, setPokemon] = useState<PokemonProp>(
        {
            name: '',
            image: '',
            sprites: { front_default: '' },
            id: 0
        });

    const [id, setId] = useState<number>(1)

    const handleAnterior = () => {
        (id > 1) && setId(id - 1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(resp =>
                resp.json()
            )
            .then(json => {
                setPokemon(json)
                console.log(json)
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <>
            {pokemon &&
                <div>
                    <h3>{pokemon.name}</h3>
                    <p> ID :{pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <br />
                    {id > 1 ? <button onClick={handleAnterior}> Anterior </button> : <button disabled> Anterior </button>}
                    <button onClick={handleSiguiente}> Siguiente </button>
                </div>
            }
        </>
    )
}

export default Pokemon