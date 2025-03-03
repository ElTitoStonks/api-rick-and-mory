// import results from '../mocks/results.json';
// import noResults from '../mocks/noResults.json';

import { useCallback, useState } from "react"

// export function useParser() {
//     const resultados = results.results;
//     const mappedResultados = resultados.map((result) => ({
//         id: result.id,
//         name: result.name,
//         status: result.status,
//         species: result.species,
//         gender: result.gender,
//         image: result.image
//     })
//     )
//     return { resultados: mappedResultados }

// }


export function useParser() {
    const [isResultados, setResultados] = useState([])

    const getCharter = useCallback((charter) => {  // Se recibe el nombre del personaje
        if (!charter) return

        fetch(`https://rickandmortyapi.com/api/character/?name=${charter}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    setResultados(data.results) // Guarda los personajes encontrados
                } else {
                    setResultados([]) // Si no hay resultados, deja un array vacío
                }
            })
            .catch((error) => {
                console.error('Error al obtener datos:', error)
                setResultados([]) // Evita valores inesperados
            })
    }, [])

    const mappedResultados = isResultados.map((result) => ({
        id: result.id,
        name: result.name,
        status: result.status,
        species: result.species,
        gender: result.gender,
        image: result.image
    }))

    return { resultados: mappedResultados, getCharter }
}