
import React, {Fragment, useEffect, useState} from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import {Route} from 'react-router-dom';
import Login from './views/Login';
//import ListaUsuarios from './views/ListaUsuarios';
import './App.css';

const UrlBD= 'http://localhost:3002/usuarios';

function App() {
  const [StateUser, setUser]= useState({
    usuario: '',
    pass: ''
  })

  useEffect(() => {
    const getUser= () => {
      fetch(UrlBD)
      .then(res=> res.json())
      .then(res=>{
        console.log(res);
      })
    }
    getUser()
  }, [])

  return(
    
    <Fragment>
        <Login StateUser={StateUser} setUser={setUser} />
    </Fragment>
    
  );
}

export default App;
