
// Abrir http (metodo, url)

// CRUD - Métodos 
// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete -DELETE
const listClient = () => fetch('http://localhost:3000/perfil').then(respuesta => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()})
  });
};

const eliminarCliente = (id) => {
  console.log('eliminar a ', id);
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'DELETE'
  })
}
const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then(resp => resp.json());
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({nombre, email})
  })
  .then()
  .catch(err => console.log(err));
};

export const clientServices = {
  listClient,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
}