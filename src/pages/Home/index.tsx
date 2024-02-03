/* eslint-disable react/no-unescaped-entities */
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

export const Home = () => {
  function getFontSize(mobileSize: string, largeSize: string) {
    const screenWidth = window.innerWidth
    if (screenWidth < 768) {
      return mobileSize
    } else {
      return largeSize
    }
  }

  // const codeSize = {
  //   fontSize: getFontSize(),
  // }
  const fetchExampleStep1 = `fetch('https://api.exemplo.com/data')`
  const fetchExempleStep2 = `  .then(response => {
    if (!response.ok) {
      throw new Error('Falha ao buscar os dados');
    }`
  const fetchExampleStep3 = `  .catch(error => {
    console.error('Erro:', error); 
  });`
  const fetchExempleStep3 = `  .then(data => {
    console.log(data); 
  })`
  const firstFetchCompleteExample = `
  //fazemos a requisição
  fetch('https://api.exemplo.com/data')
  //verificamos a resposta
  .then(response => {
    if (!response.ok) {
      throw new Error('Falha ao buscar os dados');
    }
    // Retorna uma Promise com os dados em formato JSON
    return response.json();
  })
  // Manipula os dados recebidos
  .then(data => {
    console.log(data); 
  })
  // Captura e trata erros de requisição
  .catch(error => {
    console.error('Erro:', error); 
  });
`
  const asyncAwaytExample = `
  //criamos a função assíncrona(async) que irá fazer a requisição
  async function carregarFrase() {

  //declaramos qual será a url da api
    const url = 
    'https://quote-garden.onrender.com/api/v3/quotes/random'

  //colocamos o bloco try para 'monitorar em busca de exceções'
    try {
    /*primeiro iremos fazer a declaramos a resposta(promise)
    que irá aguardar(await) a requisição.
    o primeiro parâmetro é a url da api
    no segundo parâmetro, declaramos o método('GET'=>Pegar Dados) */
      const response = await fetch(url, {
        method: 'GET',
      })
    //transformamos a resposta(promise) em formato json
    //e atribuímos à uma variável chamada 'data'
      const data = await response.json()

    //pegamos o data, que é um json agora, e vamos acessá-las,
    //e aqui selecionamos apenas a frase e o autor
      const frase = data.data[0].quoteText
      const autor = data.data[0].quoteAuthor

    //bloco catch onde será tratado a exceção(erro) caso tenha alguma
    } catch (error) {
      console.log("Erro: ", error)
    }
  }
`
  const reactPhraseAPIExample = `
import { useState, useEffect } from 'react'

export function Frases() {
  //criamos um estado para mostrar as frases de modo dinâmico
  const [frase, setFrase] = useState('carregando frase')
  const [autor, setAutor] = useState('carregando autor')

  //damos inicio à função de requisição
  const carregarFrase = async () => {
    const url = 'https://quote-garden.onrender.com/api/v3/quotes/random'

    try {
      const response = await fetch(url, {
        method: 'GET',
      })
      const data = await response.json()
  
      //guardamos os dados que queremos no estado que criamos
      setFrase(data.data[0].quoteText)
      setAutor(data.data[0].quoteAuthor)
    } catch (error) {
      console.log("Erro: ", error)
    }
  }

  // UseEffect irá carregar a frase quando o componente for 'montado'
  useEffect(() => {
    carregarFrase()
  }, [])
  // O array vazio assegura que o useEffect só é chamado uma vez

  return (
    <div>
      <h1>API Frases Aleatórias</h1>
      <p>
        Clique no botão baixo para gerar uma
        frase aleatória em inglês
      </p>

      <button onClick={carregarFrase}>
        Gerar Frase
      </button>

      <h4>{frase}</h4>
      <p>{autor}</p>
    </div>
  )
}
`

  return (
    <main className="md:px-2 lg:px-36">
      <section className="flex flex-col md:flex-row md:mb-16 ">
        <aside className="text-xs md:w-96 w-max mb-16 md:text-sm md:mb-0">
          <ul>
            <a className=" hover:text-highlight-color" href="#o-que-e-api">
              O que é API?
            </a>
            <li>
              <a
                className=" hover:text-highlight-color"
                href="#diferenca-entre-api-rest-restful"
              >
                Diferença entre API, API REST e API RESTful
              </a>
            </li>
            <li>
              <a
                className=" hover:text-highlight-color"
                href="#o-que-e-rest-principios"
              >
                O que é REST e quais são todos seus princípios?
              </a>
            </li>
            <li>
              <a
                className=" hover:text-highlight-color"
                href="#requisicao-sync-async"
              >
                Requisição síncrona e assíncrona
              </a>
            </li>
          </ul>
          <ul>
            <a
              className=" hover:text-highlight-color"
              href="#o-que-e-fetch-async-await"
            >
              O que é Fetch e Async/Await?
            </a>
            <li>
              <a className=" hover:text-highlight-color" href="#fetch">
                Fetch
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#promises">
                Promises
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#metodos-http">
                Métodos HTTP
              </a>
            </li>
            <li>
              <a
                className=" hover:text-highlight-color"
                href="#try-catch-estrutura-controle"
              >
                Try/Catch - Estrutura de Controle
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#async-await">
                Async Await
              </a>
            </li>
          </ul>
        </aside>
        <span className="mx-4 w-1 rounded-full bg-white opacity-5"></span>
        <div id="o-que-e-api" className="w-full md:m-auto">
          <h1 className="main-title">O que é API?</h1>
          <p>
            API significa{' '}
            <span className="span-highlight">
              Application Programming Interface
            </span>
            , ou{' '}
            <span className="font-medium">
              Interface de Programação de Aplicativos
            </span>
            . É um conjunto de rotinas e padrões que permitem que dois softwares
            se comuniquem entre si. Em um contexto web, uma API pode ser usada
            para fornecer dados ou serviços a um aplicativo. Por exemplo, uma
            API de uma loja online pode fornecer dados sobre produtos, preços e
            estoques. Uma API de uma rede social pode fornecer dados sobre
            usuários, postagens e curtidas.
          </p>
        </div>
      </section>
      <section className="mx-auto border-b-2 pb-1 mb-2 border-indigo-500/20">
        <div
          id="diferenca-entre-api-rest-restful"
          className="border-b-2 pb-1 mb-2 border-indigo-500/20"
        >
          <h2 className="secondary-title mt-10 md:mt-0">
            Diferença entre API, API REST e API RESTful
          </h2>

          <ul>
            <li>
              <span className="span-highlight">API: </span>
              Interface que permite a comunicação entre diferentes sistemas
            </li>
            <li className="my-1">
              <span className="span-highlight">API REST: </span>É uma API que
              segue alguns dos princípios REST.
            </li>
            <li>
              <span className="span-highlight">API RESTful: </span>É uma API que
              segue TODOS os princípios REST.
            </li>
          </ul>
        </div>
        <h2 id="o-que-e-rest-principios" className="secondary-title mt-10">
          O que é <span className="span-highlight">REST</span> e quais são todos
          seus princípios?
        </h2>
        <p>
          <span className="span-highlight">
            REST - Representational State Transfer
          </span>{' '}
          - é um padrão de arquitetura de software que impõe condições sobre
          como uma API deve ser construída e seu funcionamento. A arquitetura
          <span className="font-medium"> REST</span> possibilita a comunicação
          confiável, performática e escalável.{' '}
          <span className="text-highlight-color underline">
            {' '}
            Muito benéfico para o uso, consumo e manutenção.
          </span>
        </p>
        <ul className="list-disc">
          <h4 className="font-medium text-lg mt-2">Seus Princípios São:</h4>
          <li className="ml-5">Interface Uniforme;</li>
          <li className="ml-5">Ausência de Estado(stateless);</li>
          <li className="ml-5">Arquitetura de Camadas;</li>
          <li className="ml-5">Capacidade de Armazenamento;</li>
          <li className="ml-5">Código Sobre Demanda.</li>
        </ul>
      </section>
      <section
        id="requisicao-sync-async"
        className="border-b-2 pb-1 mb-2 border-indigo-500/20"
      >
        <h1 className="main-title mt-10">Requisição Síncrona e Assíncrona</h1>
        <p>
          Na <span className="span-highlight">Requisição Síncrona</span>, o
          código aguarda o término da operação antes de continuar a sua
          execução. Isso significa que o código fica bloqueado até que a
          requisição seja concluída e a resposta seja recebida.
        </p>
        <p className="my-2">
          Na <span className="span-highlight">Requisição Assíncrona</span>, o
          código continua sua execução sem esperar pelo término da operação. Em
          vez disso, é fornecida uma função de retorno de chamada(callback) ou
          uma Promise para ser executada quando a operação for concluída. Nesse
          tutorial iremos focar em{' '}
          <span className="span-highlight">Requisição Assíncrona</span>.
        </p>
        <p>
          <span className="span-highlight">
            Exemplo de Assincronismo uso no mundo real:
          </span>{' '}
          Quando um usuário acessa uma plataforma de streaming para assistir a
          um vídeo, a plataforma precisa carregar o conteúdo do vídeo a partir
          de seus servidores. Esse processo envolve fazer uma solicitação
          assíncrona aos servidores da empresa para obter o vídeo solicitado.
          Durante o carregamento do vídeo, a plataforma de streaming não
          bloqueia o usuário,{' '}
          <span className="text-highlight-color">
            permitindo que ele continue navegando pelo catálogo de vídeos,
            pesquisando outros títulos ou acessando outras partes da interface
            do usuário
          </span>
          . Enquanto isso, nos bastidores, o aplicativo está aguardando a
          resposta assíncrona dos servidores da empresa de streaming.
        </p>
      </section>
      <div
        id="o-que-e-fetch-async-await"
        className="border-b-2 pb-1 mb-2 border-indigo-500/20"
      >
        <h1 className="main-title mt-10">O que é Fetch e Async/Await?</h1>
        <p>
          fetch e async/await são recursos fundamentais do JavaScript para fazer
          requisições assíncronas a recursos externos, como APIs da web. Vamos
          entender o que cada um faz:
        </p>
      </div>
      <section id="fetch">
        <h2 className="text-xl text-highlight-color underline font-medium mt-2">
          Fetch
        </h2>
        <p>
          O fetch é uma API JavaScript moderna que fornece uma maneira simples e
          poderosa de fazer requisições HTTP assíncronas a recursos da web.
        </p>
        <p>
          A função Fetch é uma função global que recebe pelo menos um argumento
          obrigatório, a URL do recurso que você deseja buscar. Aqui está o
          exemplo básico de como usar o fetch para buscar dados de uma API:
        </p>
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <p className="mt-2">
            1. Primeiro, fazemos a requisição usando fetch para a URL fornecida:
          </p>
          <div className="w-full md:w-largeCodeWidth">
            <SyntaxHighlighter
              customStyle={{ fontSize: '14px' }}
              language="javascript"
              style={darcula}
            >
              {fetchExampleStep1}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <p className="mt-2">
            2. Após a requisição ser feita, usamos .then para lidar com a
            resposta da requisição. Isso é conhecido como "chaining" de
            Promises. Dentro desta função de retorno de chamada, verificamos se
            a requisição foi bem-sucedida (através da propriedade ok da
            resposta). Se não, lançamos um erro usando throw new Error('Falha ao
            buscar os dados'). Se a requisição foi bem-sucedida, retornamos os
            dados da resposta e transformamos em formato JSON usando response
            <span className="text-highlight-color">.json()</span>.
          </p>
          <div className="w-full md:w-largeCodeWidth">
            <SyntaxHighlighter
              customStyle={{ fontSize: '12px' }}
              language="javascript"
              style={darcula}
            >
              {fetchExempleStep2}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="mt-2 border-b-2 pb-1 mb-2 border-indigo-500/20">
          <p>
            3. Depois que os dados são recebidos e convertidos para JSON, usamos
            outro .then para manipular esses dados. Neste exemplo, estamos
            apenas imprimindo os dados recebidos no console.
          </p>
          <div className="w-full md:w-largeCodeWidth">
            <SyntaxHighlighter
              customStyle={{ fontSize: '14px' }}
              language="javascript"
              style={darcula}
            >
              {fetchExempleStep3}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <p>
            4. Se ocorrer algum erro durante a requisição ou durante o
            processamento dos dados, ele será capturado pelo .catch. Aqui,
            estamos apenas imprimindo o erro no console para que possamos
            identificar e diagnosticar problemas.
          </p>
          <div className="w-full md:w-largeCodeWidth">
            <SyntaxHighlighter
              customStyle={{ fontSize: '14px' }}
              language="javascript"
              style={darcula}
            >
              {fetchExampleStep3}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="border-b-2 pb-1 mb-2 border-indigo-500/20">
          <p>
            5. E assim fica o código completo com todos os passos mencionados:
          </p>
          <div className="mt-2 w-full md:w-largeCodeWidth">
            <SyntaxHighlighter
              customStyle={{ fontSize: getFontSize('10px', '20px') }}
              language="javascript"
              style={darcula}
            >
              {firstFetchCompleteExample}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
      <section>
        <strong id="promises">
          Antes de irmos para Async/Await, vamos ver o que é o termo{' '}
          <span className="text-highlight-color">promises </span> e
          <span className="text-highlight-color"> métodos HTTP</span>
        </strong>
        <h2 className="text-xl font-medium mt-2 text-highlight-color underline">
          Promises
        </h2>
        <p>
          Uma Promise é um objeto JavaScript que representa o resultado de uma
          operação assíncrona. Ela pode estar em um de três estados: pendente
          (pending), realizada (resolved), ou rejeitada (rejected).
        </p>
        <p className="mt-1 border-b-2 pb-1 mb-2 border-indigo-500/20">
          As Promises são utilizadas para lidar com operações assíncronas de
          forma mais limpa e organizada, evitando o chamado &quot;callback
          hell&quot; (um aninhamento excessivo de funções de callback). Elas
          permitem que você trate o resultado de uma operação assíncrona de
          forma encadeada, facilitando o encadeamento de várias operações
          assíncronas e a captura de erros.
        </p>
        <h2
          id="metodos-http"
          className="text-xl font-medium mt-2 text-highlight-color underline"
        >
          Métodos HTTP
        </h2>
        <ul className="mb-2 border-b-2 pb-1 border-indigo-500/20">
          <p className="mb-2">
            Os métodos HTTP são verbos que indicam a ação que está sendo
            solicitada em um recurso da web. Alguns dos métodos HTTP mais comuns
            são:
          </p>
          <li>
            <p>
              <span className="text-highlight-color font-medium">GET:</span>{' '}
              Usado para recuperar dados de um recurso específico. Por exemplo,
              ao acessar uma página da web ou obter dados de uma API.
            </p>
          </li>
          <li>
            <p>
              <span className="text-highlight-color font-medium">POST: </span>
              Usado para enviar dados para um servidor para criar ou atualizar
              um recurso. Por exemplo, ao enviar um formulário ou adicionar um
              novo item a um banco de dados.
            </p>
          </li>
          <li>
            <p>
              <span className="text-highlight-color font-medium">PUT:</span>
              Usado para atualizar um recurso existente com novos dados. Por
              exemplo, ao editar informações de um usuário ou atualizar uma
              entrada em um banco de dados.
            </p>
          </li>
          <li>
            <p>
              <span className="text-highlight-color font-medium">DELETE:</span>
              Usado para excluir um recurso específico. Por exemplo, ao remover
              um arquivo ou entrada de um banco de dados.
            </p>
          </li>
          <li>
            <p>
              <span className="text-highlight-color font-medium">PATH:</span>
              Usado para aplicar modificações parciais a um recurso. Por
              exemplo, ao atualizar apenas alguns campos de um registro em um
              banco de dados sem substituir todo o recurso.
            </p>
          </li>
        </ul>
        <div
          id="try-catch-estrutura-controle"
          className="border-b-2 pb-1 mb-2 border-indigo-500/20"
        >
          <h2 className="secondary-title text-highlight-color">
            Try/Catch - Estrutura de Controle
          </h2>
          <p className="my-4">
            No contexto de requisições assíncronas de API em JavaScript, o
            <span className="text-highlight-color"> try/catch</span> é uma
            estrutura de controle que nos permite lidar com erros que podem
            ocorrer durante a execução do código assíncrono de forma síncrona.
            <p className="mt-4">
              <span className="span-highlight">TRY</span>: O bloco try contém o
              código que queremos monitorar em busca de exceções. Quando ocorre
              uma exceção dentro deste bloco, o controle é transferido
              imediatamente para o bloco catch.
            </p>
            <p className="my-4">
              <span className="span-highlight">CATCH</span>: O bloco catch é
              onde tratamos a exceção que foi capturada no bloco try. Se uma
              exceção ocorreu no bloco try, o JavaScript irá executar o código
              dentro do bloco catch. Aqui, podemos acessar informações sobre o
              erro, como a mensagem de erro (error.message), e tomar as medidas
              necessárias para lidar com ele, como exibir uma mensagem de erro
              para o usuário ou registrar o erro para fins de depuração.
            </p>
            <p>
              Ao utilizar try/catch em torno de operações assíncronas, como
              requisições de API, podemos capturar e tratar erros de forma
              síncrona, o que facilita o tratamento de exceções e torna o código
              mais robusto e fácil de entender. Isso nos permite lidar com
              possíveis falhas na comunicação com a API, erros de conexão de
              rede ou respostas inesperadas do servidor de forma mais elegante e
              controlada.
            </p>
          </p>
        </div>
        <strong>Agora vamos para o tutorial com o uso de Async e Await</strong>
      </section>
      <section
        id="async-await"
        className="border-b-2 pb-1 mb-2 border-indigo-500/20"
      >
        <h1 className="main-title mt-10 text-highlight-color">Async Await</h1>
        <p>
          Async e Await são recursos introduzidos no ECMAScript 2017 (também
          conhecido como ES8) para simplificar o trabalho com Promises em
          JavaScript. Eles permitem escrever código assíncrono de uma maneira
          mais simples e legível, evitando o uso excessivo de then e catch.
          Vamos criar uma requisição usando Async/Await usando uma API de Frases
          Aleatórias:
        </p>
        <div className="mb-2 w-full md:w-max">
          <SyntaxHighlighter
            customStyle={{ fontSize: getFontSize('9px', '18px') }}
            language="javascript"
            style={darcula}
          >
            {asyncAwaytExample}
          </SyntaxHighlighter>
        </div>
        <p>
          Pronto, agora podemos incorporar essas as variáveis{' '}
          <span className="span-highlight">frase</span> e{' '}
          <span className="span-highlight">autor</span> na nossa interface,
          vamos à um exemplo em react:
        </p>
        <div>
          <SyntaxHighlighter
            customStyle={{ fontSize: getFontSize('9px', '18px') }}
            language="javascript"
            style={darcula}
          >
            {reactPhraseAPIExample}
          </SyntaxHighlighter>
        </div>
        <p>
          É apenas um exemplo simplificado, diversas coisas podem ser
          adicionadas, removidas e alteradas, sinta-se à vontade para explorar o
          este projeto no github, desafie-se!
        </p>
      </section>
    </main>
  )
}
