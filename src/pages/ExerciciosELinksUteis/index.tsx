export const ExerciciosELinksUteis = () => {
  return (
    <main>
      <h1 className="text-4xl mb-16 font-medium">
        Exercícios de consumo de API
      </h1>
      <p className="secondary-title">
        Desafie-se com esta lista de exercícios de API
      </p>
      <section className="mt-10 flex flex-col gap-5">
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <h2 className="main-title">1 - Frase do Dia</h2>
          <p>
            Ao carregar a página, mostre a frase do dia e seu autor obtida pela
            API do{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://pprathameshmore.github.io/QuoteGarden/"
            >
              Quote Garden.
            </a>{' '}
            Assim como foi feito nesse projeto.
          </p>
        </div>

        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <h2 className="main-title">2 - Exercício Pesquisar CEP</h2>
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
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <h2 className="main-title">3 - Exercício Bandas</h2>
          <p>
            Utilize a API do{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://musicbrainz.org/doc/MusicBrainz_API"
            >
              MusicBraiz
            </a>{' '}
            para criar uma página com um campo de busca, no qual o usuário pode
            digitar o nome de uma banda/artista. Exiba informações sobre a banda
            encontrada.
          </p>
          <ul className="flex flex-col gap-1 list-disc *:ml-5">
            <li>
              Exemplo com a Banda{' '}
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://musicbrainz.org/ws/2/artist?fmt=json&query=u2"
              >
                U2
              </a>
            </li>
            <li>
              Exemplo com o cantor{' '}
              <a className="text-blue-400 hover:text-blue-200" href="">
                Frank Sinatra
              </a>
            </li>
            <li>
              Exemplo com a banda brasileira{' '}
              <a className="text-blue-400 hover:text-blue-200" href="">
                Barão Vermelho
              </a>
            </li>
            <li>
              <span className="font-medium text-red-500">count</span> contém o
              número de resultados encontrados
            </li>
            <li>
              <span className="font-medium text-red-500">artists</span> contém
              uma lista dos resultados. Use{' '}
              <span className="font-medium text-red-500">artists[0]</span> para
              pegar somente o primeiro contendo:
            </li>
            <li>
              <span className="font-medium text-red-500">name</span> contém o
              nome do artista;
            </li>
            <li>
              <span className="font-medium text-red-500">area.name</span> contém
              o local de origem da banda;
            </li>
            <li>
              <span className="font-medium text-red-500">
                [&quot;life-span&quot;.ended]
              </span>{' '}
              contén um boolean indiando se o artista não está mais na ativa;
            </li>
            <li>
              <span className="font-medium text-red-500">id</span> contém o
              identificador do artista no MusicBrainz
            </li>
          </ul>
          <strong className="text-highlight-color">
            Bonus: Exiba também uma tabela com os trabalhos criados pelo
            artista.
          </strong>
          <p>
            endpoint:{' '}
            <span className="font-medium text-red-500">
              https://musicbrainz.org/ws/2/release-group?fmt=json&artist=ID-DO-ARTISTA
            </span>
          </p>
          <a
            className="text-blue-400 hover:text-blue-200"
            href="https://musicbrainz.org/ws/2/release-group?fmt=json&artist=65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab"
          >
            Exemplo com Metallica
          </a>
          <ul className="list-disc *:ml-5">
            <li>
              <span className="font-medium text-red-500">
                [&quot;release-groups&quot;]
              </span>{' '}
              contém um arranjo com os trabalhos, contendo cada um:
            </li>
            <li>
              <span className="font-medium text-red-500">title</span>, com o
              título do trabalho;
            </li>
            <li>
              <span className="font-medium text-red-500">
                [&quot;first-release-date&quot;]
              </span>
              , com o ano do trabalho
            </li>
          </ul>
        </div>
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <h2 className="main-title">4 - Exercício Pokedex</h2>
          <p>
            Use a{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://pokeapi.co/"
            >
              PokeAPI
            </a>{' '}
            para exibir a imagem de um pokémon{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon_da_gera%C3%A7%C3%A3o_I"
            >
              Geração 1
            </a>
            , aleatório. Para isso, sorteie um número entre 1 e 151 e use no
            endpoint abaixo.
          </p>
          <p>
            Endpoint:{' '}
            <span className="font-medium text-red-500">
              https://pokeapi.co/api/v2/pokemon/NOME-OU-NUMERO-DO-POKEMON
            </span>
          </p>
          <ul>
            <li>
              Exemplo para{' '}
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://pokeapi.co/api/v2/pokemon/25"
              >
                Pikachu, código 25
              </a>
            </li>
            <li>
              Exemplo para{' '}
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://pokeapi.co/api/v2/pokemon/129"
              >
                Magikarp, código 129
              </a>
            </li>
            <li>
              <span className="font-medium text-red-500">name</span> contém o
              nome original do Pokémon
            </li>
            <li>
              <span className="font-medium text-red-500">
                sprites.other[&quot;official-artwork&quot;].front_default
              </span>{' '}
              contém a URL da imagem a ser exibida .
            </li>
          </ul>
        </div>
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <h2 className="main-title">5 - Exercício TVShowsSearch</h2>
          <p>
            Utilize{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://github.com/ermogenes/tv-shows-search-exercise"
            >
              este template
            </a>{' '}
            e a{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://www.tvmaze.com/api"
            >
              API pública
            </a>{' '}
            do{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://www.tvmaze.com/"
            >
              TV Maze
            </a>{' '}
            para exibir programas de TV com o nome similar ao texto digitado
            pelo usuário.
          </p>
          <ul>
            <li>
              Endpoint:{' '}
              <span className="font-medium text-red-500">
                https://api.tvmaze.com/search/shows?q=TERMODESEJADO
              </span>
            </li>
            <li>
              Exemplo buscando por:{' '}
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://api.tvmaze.com/search/shows?q=star"
              >
                star
              </a>
            </li>
            <li>
              Exemplo buscando por:{' '}
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://api.tvmaze.com/search/shows?q=war"
              >
                war
              </a>
            </li>
            <li>O resultado contém um arrango de programas encontrados:</li>
            <li>
              <span className="font-medium text-red-500">show.name</span> contém
              o nome do programa
            </li>
            <li>
              <span className="font-medium text-red-500">
                show.image.medium
              </span>{' '}
              contém o URL da foto de capa do programa em qualidade média.
            </li>
          </ul>
        </div>
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <h2 className="main-title">6 - Exercício Previsão do Tempo</h2>
          <p>
            Use a API do{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://openweathermap.org/"
            >
              OpenWeather
            </a>{' '}
            para criar um projeto para obter dados meteorológicos, com a mesma
            funcionalidade que a deste site(pegar os dados meteorológicos
            atuais).
          </p>
          <p className="mb-4">
            Crie uma conta no site da openweather, para fazer uma requisição é
            necessário criar uma chave/key após criar a conta, pode criar{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://home.openweathermap.org/api_keys"
            >
              clicando aqui
            </a>
          </p>
          <strong>Nessa API serão necessários duas requisições</strong>
          <p className="mt-4">
            <a
              className="text-blue-400 hover:text-blue-200 text-lg"
              href="https://openweathermap.org/api/geocoding-api"
            >
              1- Geocoding API
            </a>
            :{' '}
            <span className="font-medium text-red-500">
              http://api.openweathermap.org/geo/1.0/direct?q={'cityname'},
              {'state code'},{'country code'}&limit={'limit'}&appid=
              {'SUA CHAVE API'}
            </span>{' '}
            (o &apos;limit&apos; é opcional, pode apagar se quiser, ele é um
            limitador de números de locais na resposta API, até 5 resultados
            podem ser retornadas na resposta API)
          </p>
          <p>
            a primeira requisição(geocoding), será para obter os dados da
            latitude e longitude, onde será usada na segunda requisição
          </p>
          <p>
            <a
              className="text-blue-400 hover:text-blue-200 text-lg"
              href="https://openweathermap.org/current"
            >
              2- Current Weather Data
            </a>
            :{' '}
            <span className="font-medium text-red-500">
              https://api.openweathermap.org/data/2.5/weather?lat={'LATITUDE'}
              &lon={'LONGITUDE'}&appid={'SUA CHAVE API AQUI'}
            </span>
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-5 my-5">
        <div>
          <h1 className="main-title">Créditos</h1>
          <p>
            A lista de exercícios apresentadas nesta página foram encontrados no
            site do{' '}
            <a
              className="text-blue-400 hover:text-blue-200"
              href="https://ermogenes.github.io/aulas-programacao-web/exercises/fetch.html"
            >
              Professor Ermogenes Palacio
            </a>{' '}
            e foram utilizados aqui como parte do projeto de estudo. Agradeço
            por esse valioso recurso online, que contribui para o aprendizado e
            crescimento da comunidade de desenvolvedores. Inclusive fica a dica
            para explorar seu repositório onde possui diversos tutoriais.
          </p>
        </div>
        <div>
          <h1 className="main-title">Demais Links Úteis</h1>
          <strong>Descubra mais sobre: </strong>
          <ul className="list-disc *:ml-5">
            <li>
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function"
              >
                Funções Assíncronas.
              </a>
            </li>
            <li>
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API"
              >
                Fetch API.
              </a>
            </li>
            <li>
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://aws.amazon.com/pt/what-is/restful-api/"
              >
                O que é uma API RESTful?
              </a>
            </li>
            <li>
              <a
                className="text-blue-400 hover:text-blue-200"
                href="https://rapidapi.com/collection/list-of-free-apis"
              >
                Lista com dezenas de API&apos;s gratuitas
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
