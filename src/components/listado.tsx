// Listado.js
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Colaborador } from '../interfases/colaborador';

interface TableProps {
    listaColaboradores: Colaborador[];
    eliminarColaborador: (colaborador: Colaborador) => void;
}

export const Listado: React.FC<TableProps> = ({ listaColaboradores, eliminarColaborador }) => {
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaColaboradores.map((colaborador) => (
                        <tr key={colaborador.id}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td>
                                <Button onClick={() => eliminarColaborador(colaborador)} variant="danger">
                                    <i className="fa-solid fa-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
