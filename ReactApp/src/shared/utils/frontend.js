import Popup from 'react-popup';

export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

export function isFirstRender(items) {
  return !items || items.length === 0 || Object.keys(items).length === 0;
}

export function removeTitular(id,titulares){
		// Filtering the titulares by removing the specific titular cuit
		return titulares.filter(
			titular => titular.id !== id
		);
}

export function showMessage (message) {
		Popup.close();
		Popup.create({
				title: 'MENSAJE:',
				content: message,
				buttons: {
					right: [{
					text: 'Close',
					action: popup => popup.close() // Closes the popup
					}],
				},
		});
}
