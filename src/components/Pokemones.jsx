import React from 'react'

//useDispatch es para consumir la accion
//useSelector es para elegir cuál
import { useDispatch, useSelector } from 'react-redux'

import { getPokemonAccion, nextPokemonAccion } from '../redux/pokemonDuck'

export const Pokemones = () => {
    const dispatch = useDispatch();

    const pokes = useSelector(store => store.pokemones.array); //si en la tienda tengo otros cosas pongo pokemones.otros
    console.log(pokes)

    return (
        <div>
            <p>lista pokemones</p>
            <button onClick={ () => dispatch( getPokemonAccion() ) }>Obtener pokemones</button>
            <button onClick={ () => dispatch( nextPokemonAccion(20) ) }>Obtener siguiente</button>

            {
                pokes.map( (pokemon, i) => (
                    <p key = {i} > {pokemon.name} </p>
                ))
            }
        </div>
    )
}
