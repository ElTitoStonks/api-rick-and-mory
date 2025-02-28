function HaveResults({ resultados }) {
    return (
        <ul className="tarjeta">
            {resultados.map((result) => (
                <li key={result.id} >
                    <img src={result.image} alt={result.name} />
                    <h2>{result.name}</h2>
                    <div className="info__status">
                        <p>{result.status} / {result.species}</p>
                    </div>
                </li>
            ))}
        </ul>

    )
}

function HaventResults() {
    return (
        <p>No hay resultados</p>
    )
}

export function GetCharter({ resultados }) {
    const hasResults = resultados?.length > 0
    return (
        hasResults
            ? <HaveResults resultados={resultados} />
            : <HaventResults />
    )
}