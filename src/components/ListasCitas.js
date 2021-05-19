import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListasCitas = ({citas, eliminarCita}) => {

    // Imprimir un mensaje en base a si hay citas o no
    let mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra las citas aqui';
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="listas-citas">
    
                    {/* recorremos el objeto citas puesto que es heredado de la App y asi generarmos el componente Cita. */}
                    {citas.map(cita => (
                        <Cita 
                            key={cita.id}
                            cita={cita}
                            eliminarCita={eliminarCita}
    
                        />
                    ))}
                </div>
    
            </div>
    
    
        </div>
    )
}

ListasCitas.prototype = {
    citas: PropTypes.array.isRequired,
    eliminarCita: PropTypes.func.isRequired
}


export default ListasCitas;
