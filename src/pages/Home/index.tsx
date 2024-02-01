export const Home = () => {
  return (
    <main>
      <aside className="text-xs">
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
      <section className="mx-auto">
        <h1>O que é API?</h1>
        <p>
          API significa{' '}
          <span className="text-highlight-color font-medium">
            Application Programming Interface
          </span>
          , ou{' '}
          <span className="font-medium">
            Interface de Programação de Aplicativos
          </span>
          . É um conjunto de rotinas e padrões que permitem que dois softwares
          se comuniquem entre si. Em um contexto web, uma API pode ser usada
          para fornecer dados ou serviços a um aplicativo. Por exemplo, uma API
          de uma loja online pode fornecer dados sobre produtos, preços e
          estoques. Uma API de uma rede social pode fornecer dados sobre
          usuários, postagens e curtidas.
        </p>
        <h2>Diferença entre API, API REST e API RESTful</h2>

        <ul>
          <li>
            <span className="text-highlight-color font-medium">API </span>
            Interface que permite a comunicação entre diferentes sistemas
          </li>
          <li>
            <span className="text-highlight-color font-medium">API REST: </span>
            É uma API que segue alguns dos princípios REST.
          </li>
          <li>
            <span className="text-highlight-color font-medium">
              API RESTful:{' '}
            </span>
            É uma API que segue TODOS os princípios REST.
          </li>
        </ul>

        <h2>
          O que é <span className="text-highlight-color font-medium">REST</span>{' '}
          e quais são todos seus princípios?
        </h2>
        <p>
          <span className="text-highlight-color font-medium">
            REST - Representational State Transfer
          </span>{' '}
          - é um padrão de arquitetura de software que impõe condições sobre
          como uma API deve ser construída e seu funcionamento. A arquitetura
          REST possibilita a comunicação confiável, performática e escalável.
          Muito benéfico para o uso, consumo e manutenção.
        </p>
        <ul>
          Seus Princípios São:
          <li>Interface Uniforme</li>
          <li>Ausência de Estado(stateless)</li>
          <li>Arquitetura de Camadas</li>
          <li>Capacidade de Armazenamento</li>
          <li>Código Sobre Demanda</li>
        </ul>
      </section>
    </main>
  )
}
