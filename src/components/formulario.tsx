import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Colaborador } from '../interfases/colaborador';

interface HijoProps {
	formValidatedValue: (valor: boolean) => void;
	alertMessageProps: (valor: string | null) => void;
	setlistaColaboradores: (valor: Colaborador[]) => void
	listaColaboradores: Colaborador[]
}

export const Formulario: React.FC<HijoProps> = ({formValidatedValue,alertMessageProps, setlistaColaboradores, listaColaboradores }) => {
	const [formData, setFormData] = useState({
		nombre: "Juan Soto",
		correo: "juans@colaborador.com",
		edad: 23,
		cargo: "Desarrollador FrontEnd",
		telefono: 99887766
	});

	const [validated, setValidated] = useState(false);

	const handleChange = (fieldName: string, value: string) => {
		setFormData({ ...formData, [fieldName]: value });
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();		
		const form = event.currentTarget;
		if (	form.checkValidity() === false 
			|| formData.nombre === '' 
			|| formData.correo === '' 
			|| formData.edad === undefined
			|| formData.cargo === ''
			|| formData.telefono === undefined   ) {
		  event.stopPropagation();
		  alertMessageProps('Todos los campos son obligatorios');
		} else {
			alertMessageProps('Se ha agregado el colaborador');
			setlistaColaboradores(
				[...listaColaboradores, {
					id: listaColaboradores.length + 1,
					nombre: formData.nombre,
					correo: formData.correo,
					edad: formData.edad,
					cargo: formData.cargo,
					telefono: formData.telefono
				}]
			)
		}
		formValidatedValue(true)
		setValidated(true)
		console.log(listaColaboradores)
	};

	const formFields = [
		{ name: "nombre", placeholder: "Nombre del colaborador", type: "text" },
		{ name: "email", placeholder: "Email del colaborador", type: "email" },
		{ name: "edad", placeholder: "Edad del colaborador", type: "number" },
		{ name: "cargo", placeholder: "Cargo del colaborador", type: "text" },
		{ name: "telefono", placeholder: "Teléfono del colaborador", type: "number" }
	];

	return (
		<div className="Formulario-container">
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				{formFields.map((field) => (
					<InputGroup className="mb-3" key={field.name}>
						<Form.Control
							placeholder={field.placeholder}
							name={field.name}
							onChange={(e) => handleChange(field.name, e.target.value)}
							type={field.type}
							required
						/>
						{/* <p>{field.name}: {formData[field.name]}</p> */}
					</InputGroup>
				))}
				<div className="d-grid gap-2">
					<Button type="submit" variant="primary" size="sm" className="my-2">
						Crear cuenta
					</Button>
				</div>
			</Form>
		</div>
	);
};
