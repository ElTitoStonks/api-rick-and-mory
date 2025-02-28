
import { useRef, useState } from 'react'
import './App.css'
import { GetCharter } from './Components/GetCharter'
import { useParser } from './hooks/useParser'

function useCharter() {
  const [charter, setCharter] = useState('')

  return { setCharter, charter }
}

function App() {
  const { resultados } = useParser()
  const { setCharter, charter } = useCharter()



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(charter)
  }

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
