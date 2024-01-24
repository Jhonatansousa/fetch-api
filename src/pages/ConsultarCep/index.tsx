import { ChangeEvent, FormEvent, useState } from 'react'

export const ConsultarCep = () => {
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [rua, setRua] = useState('')
  const [estado, setEstado] = useState('')
  const [cep, setCep] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value
    setCep(newCep)
    console.log(cep)
  }
  function handleSearchCep(event: FormEvent) {
    event.preventDefault()
    apiCep(cep)
    setCep('')
  }
  const apiCep = async (cep: string) => {
    const url = `https://api.postmon.com.br/v1/cep/${cep}`

    const response = await fetch(url, {
      method: 'GET',
    })

    const data = await response.json()

    setBairro(data.bairro)
    setCidade(data.cidade)
    setRua(data.logradouro)
    setEstado(data.estado_info.nome)
    console.log(data)
  }

  return (
    <div>
      <h1 className="text-3xl font-medium">API de Buscar Cep</h1>
      <p>Digite o CEP abaixo e receba o endereço completo</p>
      <div className="mt-5">
        {rua && (
          <p>
            <span className="text-highlight-color font-medium">Rua:</span> {rua}
          </p>
        )}
        {bairro && (
          <p>
            <span className="text-highlight-color font-medium">Bairro:</span>{' '}
            {bairro}
          </p>
        )}
        {cidade && (
          <p>
            <span className="text-highlight-color font-medium">Cidade:</span>{' '}
            {cidade}
          </p>
        )}
        {estado && (
          <p>
            <span className="text-highlight-color font-medium">Estado:</span>{' '}
            {estado}
          </p>
        )}

        <form className="mt-2" onSubmit={handleSearchCep}>
          <input
            className="p-2 text-black rounded-md focus:outline-highlight-color outline-none border-0"
            type="text"
            name="cep"
            placeholder="Digite o CEP"
            value={cep}
            onChange={handleChange}
          />
          <button
            className="ml-2 p-2 w-fit font-medium transition rounded-lg border border-transparent bg-btn-color hover:border-violet-700 active:bg-violet-900 active:scale-95"
            type="submit"
          >
            confirmar
          </button>
        </form>
      </div>
    </div>
  )
}
