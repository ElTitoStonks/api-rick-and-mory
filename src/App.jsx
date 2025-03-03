
import { useCallback, useRef, useState } from 'react'
import './App.css'
import { GetCharter } from './Components/GetCharter'
import { useParser } from './hooks/useParser'


function App() {
  const { resultados, getCharter } = useParser()
  const [charter, setCharter] = useState('') 

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    getCharter(charter)
  }, [charter, getCharter])

  const handleCharter = (e) => {
    setCharter(e.target.value)
  }

  return (
    <div className='allApp'>
      <header className='header'>
        <h1>API Rick and Morty</h1>
        {/* Formulario */}
        <form className='formulario' onSubmit={handleSubmit}>
          <input onChange={handleCharter} value={charter} type="text" placeholder='Rick, Kevin...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {/* Contenido de la página web */}
        <GetCharter resultados={resultados} />
      </main>
    </div>
  )
}

export default App
