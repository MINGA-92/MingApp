
import React from 'react';
import { useParams } from 'react-router-dom';

const ListaUsuarios = ({}) => {
    let param= useParams();
    console.log(param);
    return (
        <><nav className="navbar navbar-expand-lg navbar-light bg-dark static-top shadow">
            <div className="container">
                <h2 className="navbar-brand text-white">👨‍💻 MingApp™ </h2>
            </div>
        </nav>
        <div class="row">
            <table id="TblUsuarios" class="table table-bordered table-striped text-center mt-4">
                <thead class="bg-info text-black">
                    <tr>
                        <th>ID User</th>
                        <th>Tipo</th>
                        <th>Identificacion</th>
                        <th>Nombre Completo</th>
                        <th>Correo</th>
                        <th>Cargo</th>
                        <th class="text-primary">Editar</th>
                        <th class="text-danger">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="position: relative;">
                            <a href="/Editar/<%= Usuario.ID_Usuario %>" class="btn btn-outline-info"><i class="fas fa-edit"></i></a>
                        </td>
                        <td style="position: relative;">
                            <a href="/Eliminar/<%= Usuario.ID_Usuario %>" class="btn btn-outline-danger"><i class="fa-solid fa-person-falling-burst"></i></a>
                            <a onclick="Confirmar(Usuario.ID_Usuario)" class="btn btn-outline-danger"><i class="fa-solid fa-person-falling-burst"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div></>
    );
}

export default ListaUsuarios;
