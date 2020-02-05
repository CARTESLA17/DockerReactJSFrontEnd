import React, { Component } from 'react';
import './FormWithList.css';
import List from './List/List';
import Person from './Form';
import Popup from 'react-popup';

class FormWithList extends Component {
	
	componentWillMount() {
		const { obtenerTodosLosTitulares } = this.props;
		obtenerTodosLosTitulares();
	}

	//componentWillReceiveProps(nextProps){
		//console.log(nextProps)
	//}
	
	removeTitular = item => {
		Popup.close();
		Popup.create({
				title: 'MENSAJE:',
				content: (
					<div className="App-popup">
							ESTA SEGURO DE ELIMINAR EL TITULAR?
					</div>
				),
				buttons: {
					right: [{
					text: 'YES',
					action: popup => {
							const { borrarTitular } = this.props;
							var  { titulares: { titulares } } = this.props;
							borrarTitular(item.id, titulares);							
						}
					},
					{
					text: 'NO',
					action: popup => popup.close() // Closes the popup
					}],
				},
			});		
	}

	addTitular = titular => {
		const { almacenarTitular } = this.props;
		var  { titulares: { titulares } } = this.props;
		almacenarTitular(titular, titulares);
	}

	updateTitular = editedTitular => {
		const { actualizarTitular } = this.props;
		var  { titulares: { titulares } } = this.props;
		actualizarTitular(editedTitular, titulares);
	}

	editTitular = titular => {
		Popup.create({
				title: 'INFORMACIÓN DEL TITULAR:',
				content: (
					<div className="App">
						<Person
								titular = {titular}
								updateTitular = {this.updateTitular}								
						/>
					</div>
				),
				buttons: {
					right: [{
					text: 'Close',
					action: popup => popup.close() // Closes the popup
					}],
				},
			});
	}
	
	showTitularForm = () => {		
		Popup.create({
				title: 'INFORMACIÓN DEL TITULAR:',
				content: (
					<div className="App">
						<Person
								addTitular = {this.addTitular}								
						/>
					</div>
				),
				buttons: {
					right: [{
					text: 'Close',
					action: popup => popup.close() // Closes the popup
					}],
				},
			});
	}
	
	render() {
		const { titulares: { titulares } } = this.props;
		return (
			<div className="Todo">
				<h1>Titulares:</h1>
				<button className="TodoBtn" onClick={this.showTitularForm}>NUEVO</button>
				<List
					items = {titulares}
					removeTitular = {this.removeTitular}
					editTitular = {this.editTitular}
				/>
			</div>
		);
	}

}
export default FormWithList;
