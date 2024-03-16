import { useState } from 'react';
import { MyAlert } from './components/alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Formulario } from './components/formulario';
import { Card, CardBody } from 'react-bootstrap';
import { BaseColaboradores } from './data/base-colaboradores';
import { Colaborador } from './interfases/colaborador';
import { Listado } from './components/listado';

function App() {
    const [validated, setValidated] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [listaColaboradores, setlistaColaboradores] = useState<Colaborador[]>(BaseColaboradores);

    const eliminarColaborador = (colaborador: Colaborador) => {
        const nuevaLista = listaColaboradores.filter(c => c.id !== colaborador.id);
        setlistaColaboradores(nuevaLista);
    };

    return (
        <div className="main-container">
            <div className="table-container">
                <Listado listaColaboradores={listaColaboradores} eliminarColaborador={eliminarColaborador} />
            </div>
            <div className="form-container">
                <Card>
                    <CardBody>
                        <Card.Title className='text-center fw-bold my-4'>Agregar Colaborador</Card.Title>
                        <Formulario
                            formValidatedValue={setValidated}
                            alertMessageProps={setAlertMessage}
                            setlistaColaboradores={setlistaColaboradores}
                            listaColaboradores={listaColaboradores}
                        />
                        {validated && <MyAlert message={alertMessage} />}
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default App;
