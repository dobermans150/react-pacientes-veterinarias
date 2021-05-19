import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita:{
        mascota: '',
        propietario: '',
        fecha: '',
        hora:'',
        sintomas:''
    },
    error: false
}


class NuevaCita extends Component {
    
    state = { ...stateInicial }

    //Evento Cuando el usuario escribe en los inputs
    handleChange = (e) =>{
        //colocar lo que el usuario escribe en el state
        this.setState({
            //sobre escirbimos el objeto que esta en el state para poder almacenar los valores
            cita:{
                //de esta forma tenemos una copia de nuestro state
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        });
        
    }

    //Cuando el usuario envia el formulario
    handleSubmit = (e) =>{
        e.preventDefault();

        // extraer los valores del state
        const {mascota,propietario,sintomas,fecha,hora} = this.state.cita;

        //validar que todos los campos esten llenos
        if (mascota ==='' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error:true
            });

            //detener la ejecucion con un return
            return
        }

        //generar objeto con los datos

        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //Agregar la cita al state de App
        this.props.crearNuevaCita(nuevaCita);

        //colocar en el state el stateInicial

        this.setState({...stateInicial});
    }
    
    render() {
        //extraer valor del state
        const { error } = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb5 text-center">Todos los cmapos son obligarotorios MONGOLIN</div> : null }

                    <form 
                    method="" 
                    action=""
                    onSubmit={this.handleSubmit}
                    >
                        {/* form-group start */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="mascota"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    //Creamos nuestro event oque se ejecutara al cambiar el elemento
                                    //esto lo usamos para los demas inputs
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                                
                            </div>
                        </div>
                        {/* Form-group end */}


                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        {/* Form-group end */}
                    
                    
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date" 
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                        
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time" 
                                    className="form-control" 
                                    placeholder="Nombre Dueño Mascota"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        {/* Form-group end */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                               <textarea
                                className="form-control" 
                                placeholder="Describe los sintomas"
                                name="sintomas"
                                onChange={this.handleChange}
                                    value={this.state.cita.sintomas}

                               >                                  
                               </textarea>
                               
                                
                                
                            </div>
                        </div>
                        {/* Form-group end */}

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"></input>

                       
                    </form>
                </div>
            </div>

            
        )
    }
}

NuevaCita.propTypes ={
    crearNuevaCita: PropTypes.func.isRequired
}


export default NuevaCita;