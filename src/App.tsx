import { useState } from 'react'
import { MyAlert } from './components/alert';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Formulario } from './components/formulario';
import { Card, CardBody } from 'react-bootstrap';
import { BaseColaboradores } from './components/listado';
import { Colaborador } from './interfases/colaborador';

function App() {
	const [validated, setValidated] = useState(false);
	const [alertMessage, setAlertMessage] = useState<string | null>(null);
	const [listaColaboradores, setlistaColaboradores] = useState<Colaborador[]>(BaseColaboradores);

	return (
		<div className="main-container">
			<Card>
				<CardBody>
					<Card.Title className='text-center fw-bold my-4'>Agregar Colaborador</Card.Title>
					<Formulario 
						formValidatedValue={setValidated}
						alertMessageProps={setAlertMessage}
						setlistaColaboradores={setlistaColaboradores}
						listaColaboradores={listaColaboradores}
					/>
				</CardBody>
			</Card>
			{validated && <MyAlert message={alertMessage} />}
		</div>
	)
}

export default App
