import React from 'react';

const List = props => (
	<ul>
		{props.items.map((item, key) => (
			<li
				key={item.id}
				className="pending"
			>
				CUIT: {item.cuit} -- {item.nombre} {item.apellido} -- DNI: {item.dni} -- Razón social: {item.razonSocial} -- Año de fundación: {item.year} -- Tipo de persona: {item.tipoPersona===1?'Física':'Jurídica'}
				<div className="actions">
					<span
						className="done"
						onClick={() => props.editTitular(item)}
					>
					<i className="fa fa-edit"></i>
					</span>
					<span
						className="trash"
						onClick={() => props.removeTitular(item)}
					>
						<i className="fa fa-trash"></i>
					</span>
				</div>
			</li>
		))}
	</ul>
);

export default List;
