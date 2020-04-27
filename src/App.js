import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';


class App extends Component {

  state = {
    noticias :[]
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = ( categoria = 'general') => {
    let URL = `http://newsapi.org/v2/top-headlines?country=AR&category=${categoria}&apiKey=b3d568be6b574caa8d3fa9a842a5c220`

    fetch(URL)
        .then(dates => dates.json())
        .then( noticias => this.setState({ noticias: noticias.articles}) )
  }

  render(){
    return (
          <div className = "container-app">

              <Header titulo = "Noticias"/>
              <div className = "container white contenedor-noticias">
                  <Formulario consultarNoticias = {this.consultarNoticias}/>
                  <Noticias noticias = {this.state.noticias}/>
              </div>

          </div>
      );
  }
}

export default App;
