// Base Actions
export const request = type => ({
	type
});

export const received = (type, payload) => ({
	type,  payload
});

export const error = type => ({
	type
});

export const receivedDelete = (type, payload, idTitular, titulares) => ({
  type,
  payload,
  idTitular,
  titulares
});

export const receivedUpdate = (type, payload, titular, titulares) => ({
  type,
  payload,
  titular,
  titulares
});
