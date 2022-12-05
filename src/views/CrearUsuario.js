
import React from 'react';
//import { useParams } from 'react-router-dom';

const CrearUsuarios = ({}) => {
    /*let param= useParams();
    console.log(param);*/
    return (
        <><nav className="navbar navbar-expand-lg navbar-light bg-dark static-top shadow">
            <div className="container">
                <h2 className="navbar-brand text-white">👨‍💻 MingApp™ </h2>
            </div>
        </nav>
        <section class="pricing py-7">
            <div class="container">
                <div class="card-header bg-primary text-center text-uppercase"><b>Nuevo Usuario</b></div>
                <div class="card-body bg-light">
                    <form action="/GuardarUsuarios" method="POST">
                        <div class="mb-0" style="margin-top: 2%;">
                            <label for="TipoDocu" class="form-label">Tipo De Documento:</label>
                            <select class="form-select" id="TipoDocu" name="TipoDocu">
                                <option disabled selected>Elige Una Opcion</option>
                                <option value="TI">Tarjeta De Identidad</option>
                                <option value="CC">Cedula De Ciudadania</option>
                                <option value="CE">Cedula De Extranjeria</option>
                                <option value="PAS">Pasaporte</option>
                            </select><br></br>
                        </div>
                        <div class="mb-0">
                            <label for="Identificacion" class="form-label">Numero De Identificacion: </label>
                            <input class="form-control" type="number" id="Identificacion" name="Identificacion"/><br></br>
                        </div>
                        <div class="mb-0">
                            <label for="Nombre" class="form-label">Nombre Completo: </label>
                            <input class="form-control" type="text" id="Nombre" name="Nombre"/><br></br>
                        </div>
                        <div class="mb-0">
                            <label for="Correo" class="form-label">Correo Electronico: </label>
                            <input class="form-control" type="email" id="Correo" name="Correo"/><br></br>
                        </div>
                        <div class="mb-0">
                            <label for="Cargo" class="form-label">Cargo: </label>
                            <select class="form-select" id="Cargo" name="Cargo">
                                <option disabled selected>Elige Una Opcion</option>
                                <option value="Asesor">Asesor</option>
                                <option value="Supervisor">Supervisor</option>
                                <option value="Desarrollador">Administrador</option>
                            </select><br></br>
                        </div>
                        <div class="mb-0">
                            <label for="Pass" class="form-label">Crear Contraseña Para Este Usuario: </label>
                        </div>
                        <div class="row-cols-2">
                            <input class="form-text" type="password" id="Pass" name="Pass"/>
                            <input type="button" id="BtnVer" class="btn btn-outline-primary col-2" onclick="mostrarContrasena()" value="Ver 👀"/><br></br>
                        </div>
                        <div class="mb-0">
                            <label for="Pass" class="form-label">Confirmar Contraseña: </label>
                            <div class="row-cols-2">
                                <input class="form-text" type="password" id="ConfirPass" name="ConfirPass"/>
                                <input type="button" id="BtnVer" class="btn btn-outline-primary col-2" onclick="mostrarContrasena()" value="Ver 👀"/><br></br>
                            </div>
                        </div>
                        <div class="mb-2">
                            <button type="button" id="BtnValidar" class="btn btn-primary" onclick="ValidarCorreo()"> Guardar </button>
                            <button type="submit" id="BtnGuardar" class="btn btn-primary"> Guardar </button>
                            <a href="/" class="btn btn-secondary"> Cancelar </a>
                        </div>
                    </form>
                </div>
            </div>
        </section></>
    );
}

export default CrearUsuarios;