// App.js
import { useState } from 'react';
import { MyAlert } from './components/alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Formulario } from './components/formulario';
import { Card, CardBody } from 'react-bootstrap';
import { BaseColaboradores } from './data/base-colaboradores';
import { Colaborador } from './interfases/colaborador';
import { Listado } from './components/listado';
import Buscador from './components/buscador'; // Importar el componente Buscador

function App() {
    const [validated, setValidated] = useState(false);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [listaColaboradores, setListaColaboradores] = useState<Colaborador[]>(BaseColaboradores);
    const [filtroColaboradores, setFiltroColaboradores] = useState<Colaborador[]>(BaseColaboradores); // Agregar estado para el filtro

    const eliminarColaborador = (colaborador: Colaborador) => {
        const nuevaLista = listaColaboradores.filter(c => c.id !== colaborador.id);
        setListaColaboradores(nuevaLista);
        setFiltroColaboradores(nuevaLista); // Actualizar la lista filtrada cuando se elimina un colaborador
    };

    return (
        <div className="main-container">
            <div className="table-container">
                <Buscador listaColaboradores={listaColaboradores} setFiltroColaboradores={setFiltroColaboradores} /> {/* Pasar props al componente Buscador */}
                <Listado listaColaboradores={filtroColaboradores} eliminarColaborador={eliminarColaborador} /> {/* Usar la lista filtrada */}
            </div>
            <div className="form-container">
                <Card>
                    <CardBody>
                        <Card.Title className='text-center fw-bold my-4'>Agregar Colaborador</Card.Title>
                        <Formulario
                            formValidatedValue={setValidated}
                            alertMessageProps={setAlertMessage}
                            setlistaColaboradores={setListaColaboradores}
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
