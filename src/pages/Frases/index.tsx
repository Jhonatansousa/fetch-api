import { useState, useEffect } from 'react'

export function Frases() {
  const [frase, setFrase] = useState('carregando frase')
  const [autor, setAutor] = useState('carregando autor')

  const carregarFrase = async () => {
    const url = 'https://quote-garden.onrender.com/api/v3/quotes/random'

    const response = await fetch(url, {
      method: 'GET',
    })

    const data = await response.json()

    console.log(`Resultado da Requisição: ${data.message}`)

    setFrase(data.data[0].quoteText)
    setAutor(data.data[0].quoteAuthor)
  }

  useEffect(() => {
    // Isso irá carregar a frase quando o componente for montado
    carregarFrase()
  }, []) // O array vazio assegura que o useEffect só é chamado uma vez

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-red-600 text-3xl font-medium">Random Phrases</h1>
      <p>Cique no botão baixo para gerar uma frase aleatória em inglês</p>
      <button
        className="p-3 w-fit font-medium transition rounded-lg border border-transparent bg-btn-color hover:border-violet-700 active:bg-violet-900 active:scale-95"
        onClick={carregarFrase}
      >
        Generate
      </button>

      <h4 id="frase" className="w-11/12 italic">
        {`"${frase}"`}
      </h4>
      <p id="autor" className="text-highlight-color font-bold">
        {`- ${autor}`}
      </p>
    </div>
  )
}
