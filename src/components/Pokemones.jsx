import React from 'react'

//useDispatch es para consumir la accion
//useSelector es para elegir cuál
import { useDispatch, useSelector } from 'react-redux'

import { getPokemonAccion, nextPokemonAccion, prevPokemonAccion } from '../redux/pokemonDuck'

export const Pokemones = () => {
    const dispatch = useDispatch();

    const pokes = useSelector(store => store.pokemones.array); //si en la tienda tengo otros cosas pongo pokemones.otros
    console.log(pokes)

    return (
        <div className="container">
            <div className="row">
                <p>lista pokemones</p>
                <button type="button" class="btn btn-primary col-3" onClick={() => dispatch(prevPokemonAccion(20))}>Obtener anterior</button>
                <button type="button" class="btn btn-success col-3" onClick={() => dispatch(getPokemonAccion())}>Obtener pokemones</button>
                <button type="button" class="btn btn-primary col-3" onClick={() => dispatch(nextPokemonAccion(20))}>Obtener siguiente</button>

                {
                    pokes.map((pokemon, i) => (
                        <p key={i} > {pokemon.name} </p>
                    ))
                }
            </div>
        </div>
    )
}
