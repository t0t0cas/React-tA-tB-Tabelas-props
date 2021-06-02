//App.js
//Esta classe será o ponto de partida da nossa aplicação

//importar da pasta 'node_modules' a package do React 
import React from 'react'
import Tabela from './Tabela'

class App extends React.Component {
  //todas as classes terão, obrigatoriamente, um método chamado 'render'
  render(){
    return (
    <div className="container">{/*e apanas consegue devolver um Único Objeto*/}
      <h1>Lista de <i>tabelas</i> obtidas de diversas formas...</h1>
      
      <h2>Tabela puramente 'hard coded'</h2>
      <Tabela />


    </div>
    );
  }
}

export default App;
