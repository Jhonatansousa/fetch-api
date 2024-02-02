import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import SyntaxHighlighter from 'react-syntax-highlighter'

export const Home = () => {
  function getFontSize() {
    // Aqui você pode definir a lógica para determinar o tamanho da fonte com base na largura da tela
    const screenWidth = window.innerWidth
    if (screenWidth < 768) {
      return '10.5px'
    } else {
      return '16px'
    }
  }

  const codeSize = {
    fontSize: getFontSize(),
  }
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

  return (
    <main>
      <section className="flex flex-col md:flex-row md:mb-16 ">
        <aside className="text-xs w-96 mb-16 md:text-sm md:mb-0">
          <ul>
            <a className=" hover:text-highlight-color" href="#">
              O que é API?
            </a>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Diferença entre API, API REST e API RESTful
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Quais são todos os princípios REST?
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Requisição síncrona e assíncrona
              </a>
            </li>
          </ul>
          <ul>
            <a className=" hover:text-highlight-color" href="#">
              O que é Fetch e Async/Await?
            </a>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Fetch
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Async Await
              </a>
            </li>
          </ul>
          <ul>
            <a className=" hover:text-highlight-color" href="#">
              Criando uma Requisição
            </a>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Método HTTP
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Tratando erros
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Convertendo em Json
              </a>
            </li>
            <li>
              <a className=" hover:text-highlight-color" href="#">
                Exemplo em código simplificado
              </a>
            </li>
          </ul>
        </aside>
        <span className="mx-4 w-1 rounded-full bg-white opacity-5"></span>
        <div className="w-full md:m-auto">
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
      <section className="mx-auto">
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

        <h2 className="secondary-title mt-10">
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
      <section>
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
      <div>
        <h1 className="main-title mt-10">O que é Fetch e Async/Await?</h1>
        <p>
          fetch e async/await são recursos fundamentais do JavaScript para fazer
          requisições assíncronas a recursos externos, como APIs da web. Vamos
          entender o que cada um faz:
        </p>
      </div>
      <section>
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
          <div className="w-max">
            <SyntaxHighlighter
              customStyle={codeSize}
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
          <div className="w-max">
            <SyntaxHighlighter
              customStyle={codeSize}
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
          <div className="w-max">
            <SyntaxHighlighter
              customStyle={codeSize}
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
          <div className="w-max">
            <SyntaxHighlighter
              customStyle={codeSize}
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
          <div className="mt-2 w-max">
            <SyntaxHighlighter
              customStyle={codeSize}
              language="javascript"
              style={darcula}
            >
              {firstFetchCompleteExample}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
      <section>
        <strong>
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
        <p className="mt-1">
          As Promises são utilizadas para lidar com operações assíncronas de
          forma mais limpa e organizada, evitando o chamado "callback hell" (um
          aninhamento excessivo de funções de callback). Elas permitem que você
          trate o resultado de uma operação assíncrona de forma encadeada,
          facilitando o encadeamento de várias operações assíncronas e a captura
          de erros.
        </p>
        <h2 className="text-xl font-medium mt-2 text-highlight-color underline">
          Métodos HTTP
        </h2>
        <ul className="mb-2">
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
        <strong>Agora vamos para o tutorial com o uso de Async e Await</strong>
      </section>
      <section>{/* fazer tutorial async/await */}</section>
    </main>
  )
}
