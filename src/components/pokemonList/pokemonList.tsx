import { useEffect, useState } from "react"

type PokemonProp = {
    name: string,
    url: string; // Se puede usar para obtener más detalles sobre el Pokemon

}

const PokemonList = () => {

    const [pokemon, setPokemon] = useState<PokemonProp[]>([]);
    const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon?offset=5&limit=5")
    const [next , setNext] = useState<string>('')
    const [previous, setPrevious] = useState<string>('')

    const handleAnterior = () => {
        previous && setUrl(previous)
    }

    const handleSiguiente = () => {
        setUrl(next)
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setPokemon(json.results)
                setNext(json.next)
                setPrevious(json.previous)
            })
            .catch(e => console.log(e))
    }, [url])

  

    return (
        <>
            {pokemon.map((pokemons) => <div key={pokemons.name}>
            <p>{pokemons.name}</p>
            
            </div>)}
            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>
        </>
    )
}

export default PokemonList