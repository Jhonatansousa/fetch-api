export const ExerciciosELinksUteis = () => {
  return (
    <main>
      <h1>Exercícios de consumo de API</h1>
      <p>Desafie-se com esta lista de exercícios de API</p>

      <div>
        <h2>1 - Frase do Dia</h2>
        <p>
          Ao carregar a página, mostre a frase do dia e seu autor obtida pela
          API do{' '}
          <a
            className="text-blue-400 hover:text-blue-200"
            href="https://pprathameshmore.github.io/QuoteGarden/"
          >
            Quote Garden.
          </a>
        </p>
      </div>

      <div>
        <h2>2 - Exercício Pesquisar CEP</h2>
        <p>
          Ao preencher um input do CEP, utilize a API do{' '}
          <a
            className="text-blue-400 hover:text-blue-200"
            href="https://postmon.com.br/"
          >
            Postmon
          </a>{' '}
          para mostrar o endereço completo com cidade, estado, bairro, etc.
        </p>
      </div>
    </main>
  )
}
