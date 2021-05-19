import './bootstrap.min.css';
import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListasCitas from './components/ListasCitas';



class App extends Component {
  
  state = {
    citas: []
  }

  //Cuando la aplicacion se inicia

  componentDidMount(){
    const citasLS = localStorage.getItem('citas');

    this.setState({
      citas : JSON.parse(citasLS)
    
    });


  }

  //cuando eliminamos o agregamos una nueva cita

  componentDidUpdate(){
    localStorage.setItem('citas',JSON.stringify(this.state.citas));
  }


  //Funcion para poder enviar datos desde un componente hijo a un componente
  crearNuevaCita = datos => {
    //copiar el state actual
    const citas =[...this.state.citas, datos]
    //agregar el nuevo state
    this.setState({
      citas
    })
    console.log(datos);
  }
  //eliminando citas del state
  eliminarCita = id =>{
    console.log(id);
    console.log('diste click');

    //tomar una copia del state
    const citasActuales = [...this.state.citas];


    //utilizar filter para sacar el elemento @id del aareglo
    const citas = citasActuales.filter(cita =>  cita.id !== id);

    

    //actualizar el state
      this.setState({
        citas
      });
  }
  
  render() {


    return (
      <div className="container">
        
       
        <Fragment>
          <Header
            titulo='Administrador Paciente Veterinaria'
          />

          <div className="row">
            <div className="col-md-10 mx-auto">
            <NuevaCita
            crearNuevaCita = {this.crearNuevaCita}
            />

            <div className="mt-5 col-md10 mx-auto">

              <ListasCitas
                citas={this.state.citas}
                eliminarCita={this.eliminarCita}
              
              />

            </div>

            </div>
          </div>

        </Fragment>


      </div>
    )
  }
}


export default App;
