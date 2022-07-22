import react from 'react'
import { useState, useEffect } from 'react'
const pokemones = () => {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await response.json()
    setPokemon(data.results)
  }
  return (
    <div>
      <h1>        pokemon      </h1>
      <ul>
        {
          pokemon.map(item => <li key={item.id}  > {item.name}

          </li>)
        }

      </ul>
    </div>
  )



}
export default pokemones
