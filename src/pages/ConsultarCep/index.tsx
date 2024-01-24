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
      {rua && <p>Rua: {rua}</p>}
      {bairro && <p>Bairro: {bairro}</p>}
      {cidade && <p>Cidade: {cidade}</p>}
      {estado && <p>Estado {estado}</p>}

      <form onSubmit={handleSearchCep}>
        <input
          className="pl-1 text-black"
          type="text"
          name="cep"
          placeholder="Digite o CEP"
          value={cep}
          onChange={handleChange}
        />
        <button type="submit">confirmar</button>
      </form>
    </div>
  )
}
