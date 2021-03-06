import axios from "axios";

// constantes
const dataInicial = {
    array: [],
    offset: 0
}

//types
const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
const GET_NEXT_PAGE = 'GET_NEXT_PAGE';
const GET_PREV_PAGE = 'GET_PREV_PAGE';

// reducer 
export default function pokeReducer (state = dataInicial, accion){
    switch (accion.type) {
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                array:accion.payload.array, //ahora la lista de pokemones va a ir al state dataInicial
                offset: accion.payload.offset
            }
        
        case GET_NEXT_PAGE:
            return {
                ...state,
                array: accion.payload.array, //ahora la lista de pokemones va a ir al state dataInicial
                offset: accion.payload.offset
            }

        case GET_PREV_PAGE:
            return {
                ...state,
                array: accion.payload.array, //ahora la lista de pokemones va a ir al state dataInicial
                offset: accion.payload.offset
            }
    
        default:
            return state;
    }
}


// acciones
export const getPokemonAccion = () => async(dispatch, getState) => {

    //const {offset} = getState().pokemones
    //const offset = getState().pokemones.offset

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
        dispatch({
            type: GET_POKEMON_SUCCESS, //va a ir acá a mandar
            payload:{
                array:res.data.results, //mando la respuesta a el reducer
                offset: 0
            } 
        })
    } catch (error) {
        console.log(error);
    }
}

export const nextPokemonAccion = (numero) => async(dispatch, getState) => {

    const {offset} = getState().pokemones
    const siguiente = offset + numero

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`);
        dispatch({
            type: GET_NEXT_PAGE, //va a ir acá a mandar
            payload:{
                array:  res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const prevPokemonAccion = (numero) => async(dispatch, getState) => {

    const {offset} = getState().pokemones
    var anterior = offset
    if(offset >= 0){
        anterior = offset - numero
    }
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${anterior}&limit=20`);
        dispatch({
            type: GET_PREV_PAGE, //va a ir acá a mandar
            payload:{
                array:  res.data.results,
                offset: anterior
            }
        })
    } catch (error) {
        console.log(error);
    }
}