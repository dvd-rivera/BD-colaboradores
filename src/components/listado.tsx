import React from 'react'
import Table from 'react-bootstrap/Table';
import { Colaborador } from '../interfases/colaborador';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


interface TableProps {
	listaColaboradores: Colaborador[]
}

export const Listado: React.FC<TableProps> = ({listaColaboradores}) => {
  return (
	<div>
		<InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
			<i className="fa-solid fa-magnifying-glass"></i>
		</InputGroup.Text>
        <Form.Control
          placeholder="Ingresa tu busqueda aquí"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
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
			{ listaColaboradores.map((colaborador) => (
				<tr key={colaborador.id}>
					<td>{colaborador.nombre}</td>
					<td>{colaborador.correo}</td>
					<td>{colaborador.edad}</td>
					<td>{colaborador.cargo}</td>
					<td>{colaborador.telefono}</td>
					<td>
						<Button variant="danger">
							<i className="fa-solid fa-trash"></i>
						</Button>
					</td>
          		</tr>
			))}
        </tbody>
      </Table>      
	</div>
  )
}
