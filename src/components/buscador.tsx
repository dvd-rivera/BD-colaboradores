import React, { useState, useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Colaborador } from '../interfases/colaborador';

interface BuscadorProps {
    listaColaboradores: Colaborador[];
    setFiltroColaboradores: (colaboradores: Colaborador[]) => void;
}

const Buscador: React.FC<BuscadorProps> = ({ listaColaboradores, setFiltroColaboradores }) => {
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        const filtro = listaColaboradores.filter(colaborador =>
            Object.values(colaborador).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(busqueda.toLowerCase())
            )
        );
        setFiltroColaboradores(filtro);
    }, [busqueda, listaColaboradores, setFiltroColaboradores]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(e.target.value);
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Ingresa tu búsqueda aquí"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={busqueda}
                    onChange={handleChange}
                />
            </InputGroup>
        </div>
    );
}

export default Buscador;
