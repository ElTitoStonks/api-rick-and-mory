import results from '../mocks/results.json';
import noResults from '../mocks/noResults.json';

export function useParser() {
    const resultados = results.results;
    const mappedResultados = resultados.map((result) => ({
        id: result.id,
        name: result.name,
        status: result.status,
        species: result.species,
        gender: result.gender,
        image: result.image
    })
    )
    return { resultados: mappedResultados }

}