import React from 'react';
// import Botoes from './components'
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      formula: [],
      input:'0',
      respostaCalculo: false
    }
    this.digitos = this.digitos.bind(this)
    this.operadores = this.operadores.bind(this)
  }
}
