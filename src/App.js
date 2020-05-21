import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Definir la categoria y noticias
  const[categoria, guardarCategoria] = useState('');
  const[noticias, guardarNoticias] = useState([]);

  //Aqui agregarmos el UseEffec para que cuando detecte un cambio en categoria se vuelva a ejecutar el componente
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=3e9ceee9a0014be1ba531245707d590f`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);

    }
    consultarAPI();

  }, [categoria]);


  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario 
        guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
        noticias={noticias}
        />
      </div>

    </Fragment>
  );
}

export default App;
