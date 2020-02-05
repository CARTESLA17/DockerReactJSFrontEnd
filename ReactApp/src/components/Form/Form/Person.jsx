import React, { Component } from 'react';
import Select from 'react-select';
import './Person.css';

class Person extends Component {

	constructor(props) {
	  super(props);
	if(this.props.titular !== undefined){
	  this.state = {
			id: this.props.titular.id,
			tipoPersona: this.props.titular.tipoPersona,
			cuit: this.props.titular.cuit,
			nombre: this.props.titular.nombre,
			apellido: this.props.titular.apellido,
			dni: this.props.titular.dni,
			razonSocial: this.props.titular.razonSocial,
			year: this.props.titular.year,
			version: this.props.titular.version,
			errors: {
			  selectedTipoPersona: false,
			  cuit: false,
			  nombre: false,
			  apellido: false,
			  dni:false,
			  razonSocial: false,
			  year: false
			},
			selectedTipoPersona: null,
	  };
		}else{
			 this.state = {
			id: null,
			tipoPersona: null,
			cuit:null,
			nombre: null,
			apellido: null,
			dni: null,
			razonSocial: null,
			year: null,
			version: null,
			errors: {
			  selectedTipoPersona: false,
			  cuit: false,
			  nombre: false,
			  apellido: false,
			  dni:false,
			  razonSocial: false,
			  year: false
			},
			selectedTipoPersona: null,
	  };
		}
	}

	//componentWillReceiveProps(nextProps){
		//console.log(nextProps)
	//}

	componentWillMount() {
		const { tipoPersona } = this.state;
	    this.asignarTipoDePersona(tipoPersona);
	}

	asignarTipoDePersona = tipoPersona => {
		var selectedTipoPersona = null;
		if( tipoPersona!==null && tipoPersona===2){
			selectedTipoPersona ={value:2, label: 'Jurídica'};
		} else {
			selectedTipoPersona ={value:1, label: 'Física'};
		}
		this.setState({ selectedTipoPersona });
	}

	handleOnChange = e => {
	  const { target: { value, name } } = e;
		  this.setState({
				[name]: value
	  });
	}

	handleOnSubmit = e => {
	  // The e.preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event won't occur.
	  e.preventDefault();
	  const { id, selectedTipoPersona, cuit, nombre, apellido, dni, razonSocial, year, version} = this.state;
	  const {  updateTitular } = this.props;
	  const { addTitular } = this.props;
	  let titular =null;
	  if(selectedTipoPersona.value === 1){
		  this.setState({
			errors: {
			  cuit: cuit === null || cuit+''.trim() === '',
			  nombre: nombre === null || nombre+''.trim() === '',
			  apellido: apellido === null || apellido+''.trim() === '',
			  dni: dni === null	|| dni+''.trim() === ''
			}
		});
		if( cuit !== null && cuit+''.trim() !== '' && nombre !== null && nombre+''.trim() !== '' && apellido !== null && apellido+''.trim() !== ''
			&& dni !== null && dni+''.trim() !== '' ){
		  const tipoPersona = selectedTipoPersona.value;
		  titular = {
				id, tipoPersona, cuit, nombre, apellido, dni, razonSocial, year, version
		  };
		  console.log(cuit);
		  if(this.props.titular !== undefined){
			updateTitular(titular);
		  }else{
			 addTitular(titular);
		  }
		}
	 } else {
		  this.setState({
			errors: {
			  cuit: cuit === null || cuit+''.trim() === '',
			  razonSocial: razonSocial === null || razonSocial+''.trim() === '',
			  year: year === null || year+''.trim() === ''
			}
		  });
		 if( cuit !== null && cuit+''.trim() !== '' && razonSocial !== null && razonSocial+''.trim() !== '' && year !== null && year+''.trim() !== '' ){
		  const tipoPersona = selectedTipoPersona.value;
		  titular = {
				id, tipoPersona, cuit, nombre, apellido, dni, razonSocial, year, version
		  };
		  if(this.props.titular !== undefined){
			updateTitular(titular);
		  }else{
			 addTitular(titular);
		  }
		}
	 }
   }

	handleChange = (selectedTipoPersona) => {
		this.setState({ selectedTipoPersona });
	}

	render() {
	  const { selectedTipoPersona } = this.state;
	  return (
		<div className="Person">
		  <form onSubmit={this.handleOnSubmit}>
			<div>
			  <p><strong>Tipo de persona:</strong></p>
			  <Select className="custom-select" value={selectedTipoPersona}
							onChange={this.handleChange}
							options={ [
							  { label: "Física", value: 1 },
							  { label: "Jurídica", value: 2 }
							]
				} />
			  {this.state.errors.selectedTipoPersona && <div className="errorMessage">Required field</div>}
			</div>
			<div>
			  <p><strong>CUIT:</strong></p>
				<input name="cuit" type="number" value={this.state.cuit} onChange={this.handleOnChange} min="1"
					className={this.state.errors.cuit ? 'error' : ''}
				/>
				{this.state.errors.cuit && <div className="errorMessage">Required field</div>}

			</div>
			<div>
			  <p><strong>Nombres:</strong></p>
				<input name="nombre" type="text" value={this.state.nombre} onChange={this.handleOnChange}
				  className={this.state.errors.nombre ? 'error' : ''}
				/>
				{this.state.errors.nombre && <div className="errorMessage">Required field</div>}
			</div>
			<div>
			  <p><strong>Apellidos:</strong></p>
				<input name="apellido" type="text" value={this.state.apellido} onChange={this.handleOnChange}
				  className={this.state.errors.apellido ? 'error' : ''}
				/>
				{this.state.errors.apellido && <div className="errorMessage">Required field</div>}
			</div>
			<div>
			  <p><strong>DNI:</strong></p>
				<input name="dni" type="number" value={this.state.dni} onChange={this.handleOnChange} min="1"
					className={this.state.errors.dni ? 'error' : ''}
				/>
				{this.state.errors.dni && <div className="errorMessage">Required field</div>}
			</div>
			<div>
			  <p><strong>Razón social:</strong></p>
				<input name="razonSocial" type="text" value={this.state.razonSocial} onChange={this.handleOnChange}
				  className={this.state.errors.razonSocial ? 'error' : ''}
				/>
				{this.state.errors.razonSocial && <div className="errorMessage">Required field</div>}
			</div>
			<div>
			  <p><strong>Año de fundación:</strong></p>
				<input name="year" type="number" value={this.state.year} onChange={this.handleOnChange} min="1900" max="2019"
				  className={this.state.errors.year ? 'error' : ''}
				/>
				{this.state.errors.year && <div className="errorMessage">Required field</div>}
			</div>
			<br/>
			<p>
				<button>{this.props.titular !== undefined ?'ACTUALIZAR': 'CREAR'}</button>
			</p>
		  </form>
		</div>
	  );
	}

}
export default Person;
