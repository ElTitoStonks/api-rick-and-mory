import { useState } from 'react';
import useCharter from '../App/useCharter'
import results from '../mocks/results.json';


const URL_API = 'https://rickandmortyapi.com/api/character/?name={$}';

export function useParser({ resultados }) {
    const [charter, setCharter] = useState([]);
    const result = results.results;
    const mappedResultados = result.map((result) => ({
        id: result.id,
        name: result.name,
        status: result.status,
        species: result.species,
        gender: result.gender,
        image: result.image
    })
    )

    const getCharter = (chart) => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${resultados}`)
    }
    return { resultados: mappedResultados }
}