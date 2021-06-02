//App.js
//Esta classe será o ponto de partida da nossa aplicação

//importar da pasta 'node_modules' a package do React 
import React from 'react'
import Tabela from './Tabela'
import Tabela2 from './Tabela2'
import Tabela3 from './Tabela3'

class App extends React.Component {
  //todas as classes terão, obrigatoriamente, um método chamado 'render'
  render() {


    //esta variável é imutável
    //e, essa é uma das características dos PROPS
    const alunos = [
     {
       nome:"João",
       apelido: "Lopes"
     },
     {
      nome:"Mario",
      apelido: "Santos"
     },
     {
      nome:"Luisa",
      apelido: "Matos"
     },
     {
      nome:"Ana",
      apelido: "Silva"
     }
    ]

  return(
    <div className = "container" > {/*e apanas consegue devolver um Único Objeto*/ }
      < h1 > Lista de <i> tabelas</i > obtidas de diversas formas...</h1 >
      
      <h2>Tabela puramente 'hard coded'</h2>
      <Tabela />
      
      {/* junção de dois componentes dentro  de um outro*/ }
            <h2>Tabela com componentes simples</h2>
            <Tabela2 />
      
      {/* uso de PROPS
                um PROP é uma propriedade que se atribui a uma variável
                de certa forma, irá funcionar como o ViewBag da .NET*/}
      <h2>Tabela com dados externamente</h2>
      {/* 'dadosAlunos' é uma variável de entrada no componente 
                Naturalmente, do lado do componente existirá um parâmetro para receber estes dados*/}
      {/* {alunos} - 'alunos' será o nome dos dados
                            está escrita entre chavetas {} pq é a forma de se aceder ao conteúdo das variáveis JSX */}
      <Tabela3 dadosAlunos={alunos} />
     
    </div >
    );
  }
}

export default App;
