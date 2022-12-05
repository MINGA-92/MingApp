
import React from 'react';
import logo from '../logo.svg';

const Login = ({StateUser, setUser}) => {

    const handleChange = async e=> {
        await setUser({
            ...StateUser,
            [e.target.name]: e.target.value
        })
        console.log(StateUser);
    }

    return (
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark static-top shadow">
            <div className="container">
            <h2 className="navbar-brand text-white">👨‍💻 MingApp™ </h2>
            </div>
        </nav>
        <header className="App-header">
        <h2>¡Bienvenido a MingApp™  👨‍💻 !</h2>  
            <section className="pricing py-5"> 
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="navbar-brand text-white"> Desarrollado con React™ </h2>
                    <label className="navbar-brand text-white">Por: Diego Rendón 👨‍💻 </label>
                    </div>
                    
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form action="" method="">

                            <div className="form-outline mb-4">
                                <p className="lead fw-normal mb-0 me-3">Dirección De Correo Electrónico: </p>
                                <input type="email" id="usuario" name="usuario" onChange={handleChange} className="form-control form-control-lg" placeholder="Introduzca una dirección de correo electrónico válida" />
                            </div>
                
                            <div className="form-outline mb-3">
                            <p className="lead fw-normal mb-0 me-3">Contraseña: </p>
                                <input type="password" id="pass" name="pass" onChange={handleChange} className="form-control form-control-lg" placeholder="Introduzca su contraseña" />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <a href="https://translate.google.com/" className="link" >¿Se te olvidó tu contraseña?</a>
                                <input type="submit" className="btn btn-primary btn-lg bg-info" value="Acceder" ></input>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                            <p className="small fw-bold mt-2 pt-1 mb-0">¿No tienes una cuenta?
                                <a href="https://translate.google.com/" className="link">  Registrate </a>
                            </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5">
                    <div className="text-white mb-3 mb-md-0">
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-info"> 
                    <div className="text-white mb-3 mb-md-0">
                    MingaSoft™ 2022 - Diego Rendón. All rights reserved ©...
                    </div>
                </div>
                </div>
            </div>
            </section>

        </header>
        </div>
    );
}
 
export default Login;